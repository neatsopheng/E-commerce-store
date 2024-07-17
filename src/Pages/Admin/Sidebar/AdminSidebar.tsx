import { Link } from "react-router-dom";
import AddProduct from "../CRUD/AddProduct";

const AdminSidebar = () => {
  const sidebarItem = [
    { link: "dashboard", description: "Dashboard" },
    { link: "admin_products", description: "Products" },
    { link: "admin_categories", description: "Categories" },
    { link: "customer", description: "Customer" },
    { link: "/", description: "Go back" },
  ];

  return (
    <>
    <div>
      
    </div>
    <div className="md:w-64 lg:w-[20%] hidden lg:block bg-[#415875] mt-10 mx-5 rounded-2xl sticky top-20 h-full p-5 text-white overflow-y-auto">
      <ul className="flex flex-col gap-4">
        {sidebarItem.map((i) => (
          <Link
            to={i.link}
            key={i.description}
            className="text-white  text-xl px-2 py-3 bg-[#31435a]  hover:bg-[#415875] active:bg-slate-500 rounded-lg"
          >
            {i.description}
          </Link>
        ))}
      </ul>
    </div>
    </>
  );
};

export default AdminSidebar;
