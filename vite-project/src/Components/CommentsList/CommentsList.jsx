import { useEffect, useState } from "react";
import "./style.css";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViYjc4ZWY0ZWVkNTAwMTVhOWNhYjIiLCJpYXQiOjE3NjM3NDk0OTUsImV4cCI6MTc2NDk1OTA5NX0.RDwrCS94rhnnI_ZJ4SnW0hcBP93djavojHLQ1N4E-FE";

const CommentList = ({ asin }) => {
  const [comments, setComments] = useState([]);

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

  console.log(comments);
  return (
    <>
      <div className="div-comments-list">
        {" "}
        {/* mettere bottone per cancellare!! aggiungere un'altro bottoner per l'edit*/}
        {comments &&
          comments.map((comment) => (
            <div key={comment._id}>
              <p>{comment.author}</p>
              <p>{comment.comment}</p>
              <p>{comment.rate}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
