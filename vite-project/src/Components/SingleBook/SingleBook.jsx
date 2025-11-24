import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./style.css";
import { useState } from "react";
import CommentArea from "../CommentArea/CommentArea";

const BookSingle = ({ img, title, price, category, asin }) => {
  const [select, setSelect] = useState(false);

  const provaClick = () => {
    setSelect(!select); //se select è true diventa false, se è false diventa true, nego il valore attuale di select
    console.log(select);
  };

  return (
    <>
      <Col xs={12} md={6} xl={4} className="g-2">
        <Card
          className="card-customize shadow  "
          onClick={provaClick}
          border={select ? "danger" : null}
        >
          {" "}
          {/*Se select è true allora imposta danger, altrimenti non fare nulla  ?= se la condizione è vera, := altrimenti */}
          <Card.Body>
            <Card.Img variant="top" src={img} className="card-img-top" />
            <Card.Title className="title-card">{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{category}</Card.Text>
          </Card.Body>
        </Card>

        {select && <CommentArea asin={asin} />}
      </Col>
    </>
  );
};
export default BookSingle;
