import "./style.css";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const BookDetails = () => {
  const { asin } = useParams();
  console.log(asin);

  const [book, setBook] = useState();

  const getParams = async () => {
    try {
      const response = await fetch(`https://epibooks.onrender.com/${asin}`, {
        headers: { "Content-Type": "application/json" },
      });

      const book = await response.json();

      setBook(book.at(0));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getParams();
  }, [asin]);

  console.log(book);
  return (
    <>
      <Layout>
        <Container fluid>
          {book && (
            <Row>
              <Col className="div-custom col-6">
                <div>
                  <img src={book.img} alt={book.title}></img>
                </div>
              </Col>
              <Col className=" div-custom col-6">
                <div className="mt-4 bg-light rounded-3">
                  <p>{book.title}</p>
                  <p>{book.price}€</p>
                  <p>{book.category}</p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </Layout>
    </>
  );
};
export default BookDetails;
