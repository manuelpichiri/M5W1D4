import "./style.css";
import Container from "react-bootstrap/esm/Container.js";
import BookSingle from "../SingleBook/SingleBook";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const AllTheBooks = ({ books, setBooks }) => {
  const [inputText, setInput] = useState("");
  const [allBooks, setAllBooks] = useState(books); //inizia con l'array di tutti i libri

  console.log(inputText);

  const filteredBooks = () => {
    const booksFilter = books.filter((oneBook) =>
      oneBook.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setBooks(booksFilter);
  };

  const targetValuePlusReStockBook = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setBooks(allBooks);
    }
  };

  return (
    <Container>
      <Row>
        <div className="d-flex align-items-center">
          <input
            placeholder="Cerca il tuo libro..."
            type="text"
            value={inputText}
            onChange={targetValuePlusReStockBook} //controlla il valore scritto all'interno dell'input e in caso di input vuoto esegue e setta i libri allo stato iniziale
          />
          <button onClick={filteredBooks} className="btn btn-info ">
            Cerca
          </button>
        </div>
      </Row>
      <Row>
        {books.map((book, index) => (
          <BookSingle
            img={book.img}
            title={book.title}
            price={book.price}
            category={book.category}
            key={`${book.asin}${index}`}
            asin={book.asin}
          ></BookSingle>
        ))}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
