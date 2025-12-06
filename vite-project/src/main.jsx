import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookProvider } from "./context/BookContext";
import { CommentProvider } from "./context/CommentContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CommentProvider>
      <ThemeProvider>
        <BookProvider>
          <App />
        </BookProvider>
      </ThemeProvider>
    </CommentProvider>
  </StrictMode>
);
