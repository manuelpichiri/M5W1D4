import Navigation from "../MyNav/Navbar";
import FooterProva from "../MyFooter/Footer";
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
