import Navigation from "../MyNav/Navbar";
import FooterProva from "../MyFooter/Footer";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <FooterProva />
    </>
  );
};
export default Layout;
