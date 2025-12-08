import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { CommentContext } from "../../context/CommentContext";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViYjc4ZWY0ZWVkNTAwMTVhOWNhYjIiLCJpYXQiOjE3NjUwMjEyNDYsImV4cCI6MTc2NjIzMDg0Nn0.gPivqNKiCQ_EiMdE_jmfsUGwRpEkl9PwQbThH6p0kbo";
const SingleCommentEdit = ({ commento, getComments }) => {
  console.log(commento);
  const [editComment, setEditComment] = useState({ commento });
  const { commentLoading, setCommentLoading } = useContext(CommentContext);

  const handlerEdit = (e) => {
    const { name, value } = e.target;
    setEditComment({
      ...editComment,
      [name]: value, //name è riferito al nome dell'input es. comment, rate ecc. value è il valore ovvero quello che l'utente ha scritto
    });
  };

  const changheComment = async (_Id) => {
    setCommentLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${_Id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: token },
          body: JSON.stringify(editComment),
        }
      );
      const commentToChange = await response.json();
      if (response.ok) {
        getComments();
      }
      return commentToChange;
    } catch (error) {
      console.log(error.message);
    } finally {
      setCommentLoading(false);
    }
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          changheComment(commento._id);
        }}
        className="custom-form"
      >
        <Form.Group className="form-group">
          <Form.Label className="label-text"> Write here</Form.Label>
          <Form.Control
            placeholder="Write your comment"
            as="textarea"
            name="comment"
            defaultValue={commento.comment}
            rows={2}
            onChange={handlerEdit}
          ></Form.Control>
          <Form.Control
            placeholder="Rate the books"
            type="number"
            name="rate"
            defaultValue={commento.rate}
            min={1}
            max={5}
            onChange={handlerEdit}
          ></Form.Control>
        </Form.Group>
        <div className="div-button">
          <button type="submit" className="btn btn-info">
            Send
          </button>
        </div>
      </Form>
    </>
  );
};

export default SingleCommentEdit;
