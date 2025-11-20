import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./style.css";
import { useState } from "react";
const BookSingle = ({ img, title, price, category }) => {
  const [select, setSelect] = useState(false);

  const provaClick = () => {
    setSelect(!select); //se select è true diventa false, se è false diventa true, nego il valore attuale di select
  };
  console.log(select);

  return (
    <Col xs={12} md={6} xl={4} className="g-2" onClick={provaClick}>
      <Card className="card-customize" border={select ? "danger" : null}>
        {" "}
        {/*Se select è true allora imposta danger, altrimento non fare nulla  ?= se la condizione è vera, := altrimenti */}
        <Card.Body>
          <Card.Img variant="top" src={img} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default BookSingle;
