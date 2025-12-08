import "./style.css";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../Loading/Loading";

const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState();
  const [load, setLoad] = useState(false);

  const getParams = async () => {
    setLoad(true);
    try {
      const response = await fetch(`https://epibooks.onrender.com/${asin}`, {
        headers: { "Content-Type": "application/json" },
      });
      const book = await response.json();
      setBook(book.at(0));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getParams();
  }, [asin]);

  return (
    <>
      <Layout>
        {load ? (
          <Loading />
        ) : (
          <Container fluid>
            {book && (
              <Row className="mt-5 row-custom">
                <Col xs={12} md={12} lg={6} className="div-custom col-6 ">
                  <div className=" w-100 mt-5 div-custom1 ">
                    <img
                      className="img-custom  rounded-3"
                      src={book.img}
                      alt={book.title}
                    ></img>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={12}
                  lg={6}
                  className=" div-custom col-6 div-details"
                >
                  <div className=" w-75 rounded-3 div-paragraph ">
                    <p className="custom-details">{book.title}</p>
                    <p className="category-custom">{book.category}</p>
                    <p className="custom-details">{book.price}€</p>
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        )}
      </Layout>
    </>
  );
};
export default BookDetails;
