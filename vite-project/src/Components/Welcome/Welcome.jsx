import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
const WelcomeAlert = () => {
  //alert("Benventuo");

  return (
    <Container fluid className="hero">
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <h1 className="container-welcome">BookShop</h1>
            <p className="text-light m-0">La tua libreria preferita</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeAlert;
