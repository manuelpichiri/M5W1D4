import "bootstrap";
import Navigation from "./Components/MyNav/Navbar";
import FooterProva from "./Components/MyFooter/Footer";
import WelcomeAlert from "./Components/Welcome/Welcome";
import BooksCover from "./Components/AllTheBooks/RenderBooks/RenderBooks";
import booksFantasy from "./Components/AllTheBooks/Genre/fantasy.json";
const App = () => {
  return (
    <>
      <Navigation />
      <WelcomeAlert />
      <BooksCover books={booksFantasy} />

      <FooterProva></FooterProva>
    </>
  );
};

export default App;
