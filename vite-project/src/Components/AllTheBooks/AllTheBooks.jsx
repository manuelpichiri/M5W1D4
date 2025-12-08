import "./style.css";
import Container from "react-bootstrap/esm/Container.js";
import BookSingle from "../SingleBook/SingleBook";
import Row from "react-bootstrap/Row";
import CommentArea from "../CommentArea/CommentArea";
import { useContext, useState, useEffect } from "react";
import { BookContext } from "../../context/BookContext";
import Spinner from "react-bootstrap/Spinner";
import { Col } from "react-bootstrap";
import { CommentContext } from "../../context/CommentContext";

const AllTheBooks = () => {
  const { books, loading } = useContext(BookContext);
  const { isSelected, setIsSelected } = useContext(CommentContext);

  return (
    <Container className="mb-5 pb-4">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row className="d-flex justify-content-between mt-5 ">
          <Col xs={6} md={8} lg={9}>
            <div className="prova">
              {books.slice(0, 20).map((book, index) => (
                <BookSingle
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  category={book.category}
                  key={`${book.asin}${index}`}
                  asin={book.asin}
                ></BookSingle>
              ))}
            </div>
          </Col>
          <Col xs={6} md={4} lg={3} className="  commentAreaCustom">
            {" "}
            <CommentArea asin={isSelected}></CommentArea>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default AllTheBooks;
