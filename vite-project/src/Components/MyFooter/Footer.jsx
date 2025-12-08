import "./style.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const FooterProva = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer
      className={`container-fluid footer-custom ${
        isDark ? "dark-mode" : "light-mode"
      }`}
    >
      <Row>
        <Col className=" md-12 ">
          <ul className="d-flex justify-content-center align-item-center gap-4 m-0 p-0">
            <li className="list-unstyled">
              <a
                className={`list-decoration  ${
                  isDark ? "text-light" : "text-dark"
                }`}
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="list-unstyled">
              <a
                className={`list-decoration  ${
                  isDark ? "text-light" : "text-dark"
                }`}
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li className="list-unstyled">
              <a
                className={`list-decoration  ${
                  isDark ? "text-light" : "text-dark"
                }`}
                href="#"
              >
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
