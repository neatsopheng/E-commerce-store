import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import ProductGrid from "./Pages/ProductGrid";
import ProductDetailPage from "./Pages/DetailPage.tsx/ProductDetailPage";
import AdminLayout from "./Pages/Admin/AdminLayout";
import AddProduct from "./Pages/Admin/CRUD/AddProduct";
import UpdateProduct from "./Pages/Admin/CRUD/UpdateProduct";
import Dashboard from "./Pages/Admin/Sidebar/Dashboard";
import AdminProduct from "./Pages/Admin/Sidebar/AdminProduct";
import Category from "./Pages/Admin/Sidebar/Category";
import Customer from "./Pages/Admin/Sidebar/Customer";
import AdminProductLayout from "./Pages/Admin/Sidebar/AdminProductLayout";
import Homepage from "./Pages/HomePage";

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductGrid />},
      { path: ":id", element: <ProductDetailPage />,},
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {index: true, element: <Dashboard />},
      {path: "admin_categories", element: <Category />},
      {path: "customer", element: <Customer />},
      {path: "admin_products", element: <AdminProductLayout /> ,
        children: [
          {index: true, element: <AdminProduct />},
          {path: "add_product", element: <AddProduct />},
          {path: "update_product/:id", element: <UpdateProduct />}
      ]},
    ]
  },
]);
// { link: "admin_products", description: "Products" },
// { link: "admin_category", description: "Categories" },
// { link: "customer", description: "Customer" },
// { link: "add_product", description: "Add Product" },
// { link: "update_product", description: "Update Product" },
// { link: "delete_product", description: "Delete Product" },
// { link: "/", description: "Go back" },
