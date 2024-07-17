import { Outlet } from "react-router-dom";
import NavbarOne from "./Navbar/NavbarOne";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Homepage from "./HomePage";

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
