import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import ProductGrid from "./Pages/ProductGrid";
import ProductDetailPage from "./Pages/DetailPage.tsx/ProductDetailPage";
import Homepage from "./Pages/HomePage";
import AdminPage from "./Pages/Admin/AdminPage";
import AdminLayout from "./Pages/Admin/AdminLayout";

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductGrid /> },
      { path: "products/:id", element: <ProductDetailPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />
  }
]);
