import "./style.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const FooterProva = () => {
  return (
    <footer className="container-fluid footer-custom">
      <Row>
        <Col className=" md-12 ">
          <ul className="d-flex justify-content-center align-item-center gap-3">
            <li className="list-unstyled">
              <a className="list-decoration" href="#">
                About Us
              </a>
            </li>
            <li className="list-unstyled">
              <a className="list-decoration" href="#">
                Contact Us
              </a>
            </li>
            <li className="list-unstyled">
              <a className="list-decoration" href="#">
                Find Us
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterProva;
