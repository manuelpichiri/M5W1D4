import "bootstrap";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import BookDetails from "./Components/BookDetails/BookDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/BookDetails/:asin" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
