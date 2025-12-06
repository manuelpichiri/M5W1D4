import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./style.css";
import { useContext, useState } from "react";
import CommentArea from "../CommentArea/CommentArea";
import { CommentContext } from "../../context/CommentContext";
import { Link } from "react-router-dom";
const BookSingle = ({ img, title, price, category, asin }) => {
  const { isSelected, setIsSelected } = useContext(CommentContext);

  const provaClick = () => {
    setIsSelected(asin);
  };

  return (
    <>
      <Col xs={12} md={6} lg={4} className="g-5">
        <Card
          className="card-customize"
          onClick={provaClick}
          border={isSelected === asin ? "danger" : null}
        >
          {" "}
          {/*Se select è true allora imposta danger, altrimenti non fare nulla  ?= se la condizione è vera, := altrimenti */}
          <Card.Body>
            <Card.Img variant="top" src={img} className="card-img-top" />
            <Card.Title className="title-card mt-2">{title}</Card.Title>
            <Card.Text>{price}€</Card.Text>
            <Card.Text className="badge text-bg-secondary  ">
              {category}
            </Card.Text>
          </Card.Body>
          <div>
            <Link to={`/BookDetails/${asin}`} className="btn btn-info m-2">
              Details
            </Link>
          </div>
        </Card>
      </Col>
    </>
  );
};
export default BookSingle;
