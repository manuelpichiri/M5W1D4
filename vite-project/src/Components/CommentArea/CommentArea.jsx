import { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CommentList from "../CommentsList/CommentsList";
import "./style.css";
import { CommentContext } from "../../context/CommentContext";
import { Container, Row, Col } from "react-bootstrap";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViYjc4ZWY0ZWVkNTAwMTVhOWNhYjIiLCJpYXQiOjE3NjUwMjEyNDYsImV4cCI6MTc2NjIzMDg0Nn0.gPivqNKiCQ_EiMdE_jmfsUGwRpEkl9PwQbThH6p0kbo";

const CommentArea = ({ asin }) => {
  const { isSelected, setCommentLoading, commentLoading } =
    useContext(CommentContext);
  const [comments, setComments] = useState([]);

  const [formData, setFormData] = useState({
    comment: "",
    rate: "",
    elementId: asin,
  });

  const getComments = async () => {
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
    }
  };
  const postComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        getComments();
      }
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, //name è riferito al nome dell'input es. comment, rate ecc. value è il valore ovvero quello che l'utente ha scritto
    });
  };

  const submitOn = async (e) => {
    e.preventDefault();
    await postComment();
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      elementId: asin,
    }));
  }, [asin]);

  return (
    <>
      <Container data-testid="commentArea">
        <Row>
          <Col xs={12}>
            {isSelected !== "" && (
              <div className="d-flex flex-column">
                <Form onSubmit={submitOn} className="custom-form">
                  <Form.Group className="form-group">
                    <Form.Label className="label-text"> Write here</Form.Label>
                    <Form.Control
                      placeholder="Write your comment"
                      as="textarea"
                      name="comment"
                      rows={2}
                      onChange={onChangeInput}
                    ></Form.Control>
                    <Form.Control
                      placeholder="Rate the books"
                      type="number"
                      name="rate"
                      min={1}
                      max={5}
                      onChange={onChangeInput}
                    ></Form.Control>
                  </Form.Group>
                  <div className="div-button">
                    <button type="submit" className="btn btn-info">
                      Send
                    </button>
                  </div>
                </Form>
                <CommentList
                  asin={isSelected}
                  comment={formData.comment}
                  rate={formData.rate}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CommentArea;
