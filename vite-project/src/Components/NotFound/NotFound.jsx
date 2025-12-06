import { Container, Row, Col } from "react-bootstrap";
import Layout from "../Layout/Layout";
import "./style.css";
const NotFound = () => {
  return (
    <>
      <Layout />
      <Container fluid>
        <Row className="col-custom">
          <Col className=" col-12 col-custom">
            <div className="rounded-3 bg-dark ">
              <p className="text-light text-custom">
                <span>Errore 404 pagina non trovata</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NotFound;
