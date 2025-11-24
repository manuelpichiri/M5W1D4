import "bootstrap";
import Navigation from "./Components/MyNav/Navbar";
import FooterProva from "./Components/MyFooter/Footer";
import WelcomeAlert from "./Components/Welcome/Welcome";
import AllTheBooks from "./Components/AllTheBooks/AllTheBooks";
import booksFantasy from "./Components/Genre/fantasy.json";
import booksHorror from "./Components/Genre/horror.json";
import booksHistory from "./Components/Genre/history.json";
import booksRomance from "./Components/Genre/romance.json";
import booksSciFi from "./Components/Genre/scifi.json";
import "./App.css";
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
    <div className="wallpaper">
      <Navigation />
      <WelcomeAlert />
      <AllTheBooks books={books} setBooks={setBooks} />

      <FooterProva></FooterProva>
    </div>
  );
};

export default App;
