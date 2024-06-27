import { Outlet } from "react-router-dom"
import NavbarOne from "../Navbar/NavbarOne"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div>
        <NavbarOne />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
        
    </div>
  )
}

export default Layout