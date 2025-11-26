import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

import { useContext, useState, useEffect } from "react";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";

const Navigation = () => {
  const { books, setBooks, allBooks } = useContext(BookContext);

  const { isDark, setIsDark } = useContext(ThemeContext);

  const [inputText, setInput] = useState("");

  const filteredBooks = () => {
    const booksFilter = allBooks.filter((oneBook) =>
      oneBook.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setBooks(booksFilter);
    console.log(booksFilter);
  };

  const targetValuePlusReStockBook = (e) => {
    setInput(e.target.value);

    if (e.target.value === "") {
      setBooks(allBooks);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">HOMELOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="d-flex align-items-center justify-content-center w-100">
          <input
            className="w-100 input-search"
            placeholder="Cerca il tuo libro..."
            type="text"
            value={inputText}
            onChange={targetValuePlusReStockBook} //controlla il valore scritto all'interno dell'input e in caso di input vuoto esegue e setta i libri allo stato iniziale
          />
          <button onClick={filteredBooks} className="btn btn-info ms-2">
            Cerca
          </button>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
