import { Children, createContext, useEffect, useState } from "react";

export const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const [inputField, setInputField] = useState("");
  const [allBooks, setAllBooks] = useState([]); //inizia con l'array di tutti i libri
  const [loading, setLoading] = useState(false);

  console.log(loading);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    setLoading(true);
    try {
      const params = await fetch(`https://epibooks.onrender.com/`, {
        headers: { "Content-Type": "application/json" },
      });

      const data = await params.json();

      setBooks(data);
      setAllBooks(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log(loading);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
    console.log(books);
  }, []);

  return (
    <BookContext.Provider
      value={{
        inputField,
        setInputField,
        books,
        setBooks,
        allBooks,
        setAllBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
