import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import ProductGrid from "./Pages/ProductGrid";
import ProductDetailPage from "./Pages/DetailPage.tsx/ProductDetailPage";
import Homepage from "./Pages/HomePage";
import AdminPage from "./Pages/Admin/AdminPage";
import AdminLayout from "./Pages/Admin/AdminLayout";
import AddProduct from "./Pages/Admin/CRUD/AddProduct";
import UpdateProduct from "./Pages/Admin/CRUD/UpdateProduct";
import Dashboard from "./Pages/Admin/Sidebar/Dashboard";
import AdminProduct from "./Pages/Admin/Sidebar/AdminProduct";
import Category from "./Pages/Admin/Sidebar/Category";
import Customer from "./Pages/Admin/Sidebar/Customer";
import AdminProductLayout from "./Pages/Admin/Sidebar/AdminProductLayout";

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "", element: <ProductGrid /> },
      { path: "products", element: <ProductGrid /> },
      { path: "products/:id", element: <ProductDetailPage />,
        children: [
          {}
        ]
       },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {index: true, element: <AdminPage />},
      {path: "dashboard", element: <Dashboard />},
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
