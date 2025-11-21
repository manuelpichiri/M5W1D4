import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViYjc4ZWY0ZWVkNTAwMTVhOWNhYjIiLCJpYXQiOjE3NjM3NDk0OTUsImV4cCI6MTc2NDk1OTA5NX0.RDwrCS94rhnnI_ZJ4SnW0hcBP93djavojHLQ1N4E-FE";
const CommentArea = ({ asin }) => {
  const [formData, setFormData] = useState({
    comment: "",
    rate: "",
    elementId: asin,
  });
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
      return await response.json();
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {}, []);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitOn = async (e) => {
    e.preventDefault();
    await postComment();
  };
  console.log(formData);
  return (
    <>
      <Form onSubmit={submitOn}>
        <Form.Group>
          <Form.Label> Write here</Form.Label>
          <Form.Control
            as="textarea"
            name="comment"
            rows={2}
            onChange={onChangeInput}
          ></Form.Control>
          <Form.Control
            type="number"
            name="rate"
            min={1}
            max={5}
            onChange={onChangeInput}
          ></Form.Control>
        </Form.Group>
        <button type="submit" className="btn btn-info">
          Send
        </button>
      </Form>
    </>
  );
};

export default CommentArea;
