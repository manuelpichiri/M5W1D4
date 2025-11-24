import { useEffect, useState } from "react";
import "./style.css";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViYjc4ZWY0ZWVkNTAwMTVhOWNhYjIiLCJpYXQiOjE3NjM3NDk0OTUsImV4cCI6MTc2NDk1OTA5NX0.RDwrCS94rhnnI_ZJ4SnW0hcBP93djavojHLQ1N4E-FE";

const CommentList = ({ asin, comment, rate, _id }) => {
  const [comments, setComments] = useState([]);

  const updateComment = {
    comment: comment.value,
    rate: rate.value,
    elementId: asin,
  };

  const changheComment = async (_id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: token },
          body: JSON.stringify({ _id, rate, comment }),
        }
      );
      return response.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteComment = async (_id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  const getBooks = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
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
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="div-comments-list">
        {" "}
        {/* mettere bottone per cancellare!! aggiungere un'altro bottoner per l'edit*/}
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="div-comment">
              <span className="fs-5 span-author">Author: </span>
              <p>{comment.author}</p>
              <span className="fs-5 span span-comment">Comment: </span>
              <p>{comment.comment}</p>
              <span className="fs-5 span-rate">Rate</span>
              <p>{comment.rate}/5</p>
              <div className="div-button-choice">
                <button
                  onClick={() => {
                    changheComment(comment._id);
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
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
