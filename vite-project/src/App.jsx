import "bootstrap";
import Navigation from "./Components/MyNav/Navbar";
import FooterProva from "./Components/MyFooter/Footer";
import WelcomeAlert from "./Components/Welcome/Welcome";
import BooksCover from "./Components/AllTheBooks/RenderBooks";
import booksFantasy from "./Components/Genre/fantasy.json";
import booksHorror from "./Components/Genre/horror.json";
import booksHistory from "./Components/Genre/history.json";
import booksRomance from "./Components/Genre/romance.json";
import booksSciFi from "./Components/Genre/scifi.json";

import { useState } from "react";
const App = () => {
  const [books, setBooks] = useState([
    ...booksFantasy,
    ...booksHorror,
    ...booksHistory,
    ...booksRomance,
    ...booksSciFi,
  ]);
  return (
    <>
      <Navigation />
      <WelcomeAlert />
      <BooksCover books={books} setBooks={setBooks} />

      <FooterProva></FooterProva>
    </>
  );
};

export default App;
