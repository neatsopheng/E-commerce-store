import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="bg-[#2c405c] w-full overflow-x-auto">

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
