import React from "react";
import { Outlet } from "react-router-dom";

const AdminProductLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminProductLayout;
