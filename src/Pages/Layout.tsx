import { Outlet } from "react-router-dom";
import NavbarOne from "./Navbar/NavbarOne";
import Footer from "./Footer";
import ScrollToTop from "../shared/ScrollToTop";

const Layout = () => {
  return (
    <div>
      <NavbarOne />
      <div className="flex flex-col">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
