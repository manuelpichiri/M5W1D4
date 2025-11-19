import "./style.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BooksCover = ({ books }) => {
  console.log(books);

  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col xs={12} md={6} xl={4}>
            <Card className="card-customize mt-3 ">
              <Card.Body>
                <Card.Img variant="top" src={book.img} />
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BooksCover;
