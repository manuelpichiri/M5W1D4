import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
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
    <Navbar expand="lg" className={isDark ? "dark-mode" : "light-mode"}>
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="nav-brand-custom">
          <Link to={`/`}>
            <img src="../../../public/assets/BookShop.png" className="w-50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="d-flex align-items-center justify-content-center w-100">
          <input
            className="w-75 input-search input-custom"
            placeholder="Search your book..."
            type="text"
            value={inputText}
            onChange={targetValuePlusReStockBook} //controlla il valore scritto all'interno dell'input e in caso di input vuoto esegue e setta i libri allo stato iniziale
          />
          <button
            onClick={filteredBooks}
            className={`button-custom ${isDark ? "dark-mode" : "light-mode"}`}
          >
            Search
          </button>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className={`me-auto  ${isDark ? "dark-mode" : "light-mode"}`}>
            <Nav.Link href="#" className={isDark ? "text-light" : "text-dark"}>
              About
            </Nav.Link>
            <Nav.Link href="#" className={isDark ? "text-light" : "text-dark"}>
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="form-check form-switch d-flex align-items-center ">
          <input
            className="form-check-input "
            type="checkbox"
            role="switch"
            checked={isDark}
            id="flexSwitchCheckDefault"
            onChange={(event) => setIsDark(event.target.checked)}
          />
          <label
            className="form-check-label d-flex ms-2"
            for="flexSwitchCheckDefault"
          >
            {isDark ? <Moon fill="#deb616ff" /> : <Sun fill="#e99b16ff" />}
          </label>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
