import { Outlet } from "react-router-dom";
import NavbarOne from "./Navbar/NavbarOne";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <NavbarOne />
      <div className="flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
