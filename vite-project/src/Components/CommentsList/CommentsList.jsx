import { useContext, useEffect, useState } from "react";
import "./style.css";
import { CommentContext } from "../../context/CommentContext";
import SingleCommentEdit from "../SingleComment/SingleCommentEdit";
import Loading from "../Loading/Loading";
import { Container, Row, Col } from "react-bootstrap";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViYjc4ZWY0ZWVkNTAwMTVhOWNhYjIiLCJpYXQiOjE3NjUwMjEyNDYsImV4cCI6MTc2NjIzMDg0Nn0.gPivqNKiCQ_EiMdE_jmfsUGwRpEkl9PwQbThH6p0kbo";

const CommentList = ({ asin, comment, rate }) => {
  const [comments, setComments] = useState([]);
  const { isSelected, commentLoading, setCommentLoading } =
    useContext(CommentContext);
  const [idToEdit, setIdToEdit] = useState(null);

  const updateComment = {
    comment: comment.value,
    rate: rate.value,
    elementId: isSelected,
  };

  const deleteComment = async (_Id) => {
    setCommentLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${_Id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        getComments();
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setCommentLoading(false);
    }
  };

  const getComments = async () => {
    setCommentLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${isSelected}/comments/`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setCommentLoading(false);
    }
  };

  useEffect(() => {
    getComments();
  }, [isSelected]);
  //

  return (
    <>
      {commentLoading ? (
        <div className="d-flex justify-content-center align-item-center mt-3">
          <Loading />
        </div>
      ) : (
        <Container>
          <Row className="mt-2">
            {" "}
            {/* mettere bottone per cancellare!! aggiungere un'altro bottoner per l'edit*/}
            {comments &&
              comments.map((comment) => (
                <Col
                  xs={12}
                  md={12}
                  lg={12}
                  key={comment._id}
                  className="div-comment mt-2"
                >
                  <span className="fs-5 span-author">Author: </span>
                  <p className="p-custom ">{comment.author}</p>
                  <span className="fs-5 span span-comment">Comment: </span>
                  <p>{comment.comment}</p>
                  <span className="fs-5 span-rate">Rate:</span>
                  <p>{comment.rate}/5</p>
                  <div className="div-button-choice">
                    <button
                      onClick={() => {
                        setIdToEdit((prev) =>
                          prev === comment._id ? null : comment._id
                        );
                      }}
                      className="btn btn-warning"
                    >
                      Modify
                    </button>

                    <button
                      onClick={() => {
                        deleteComment(comment._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                  {idToEdit === comment._id && (
                    <SingleCommentEdit
                      commento={comment}
                      getComments={getComments}
                    />
                  )}
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default CommentList;
