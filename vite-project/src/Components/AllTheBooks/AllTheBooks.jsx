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
        <Row className="d-flex justify-content-between">
          <Col>
            <Row className="d-flex justify-content-between">
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
            </Row>
          </Col>
          <Col xs={12} md={3} lg={3} className=" mt-5 ps-4 pe-4">
            {" "}
            <CommentArea asin={isSelected}></CommentArea>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default AllTheBooks;
