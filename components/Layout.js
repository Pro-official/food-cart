import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
