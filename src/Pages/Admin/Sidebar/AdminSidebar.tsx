import { Link, NavLink } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineCategory,
  MdOutlinePeopleAlt,
  MdArrowBack,
} from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { useState } from "react";

const AdminSidebar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const sidebarItem = [
    {
      link: "dashboard",
      description: "Dashboard",
      icon: <MdOutlineDashboard />,
    },
    { link: "admin_products", description: "Products", icon: <FaShop /> },
    {
      link: "admin_categories",
      description: "Categories",
      icon: <MdOutlineCategory />,
    },
    { link: "customer", description: "Customer", icon: <MdOutlinePeopleAlt /> },
    { link: "/", description: "Go back", icon: <MdArrowBack /> },
  ];

  return (
    <>
      {/* <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <p>dbvahvbsfdsgadh</p>
        </div>
        <div className="p-4 pb-2 flex justify-between items-center">
          <p>dbvahvbadh</p>
        </div>
        <div className="p-4 pb-2 flex justify-between items-center">
          <p>dbvahvbadh</p>
        </div>
      </nav>
    </aside> */}

      <aside className=" bg-gray-100 m-1 rounded sticky top-20 h-screen text-white ">
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="text-black text-3xl w-full flex justify-end px-2 bg-gray-300 rounded-lg py-2"
        >
          {isExpanded ? <LuChevronFirst /> : <LuChevronLast />}
        </button>

        <div className="">
          
          <nav className="h-full">
            {
              isExpanded ? 
              <ul className="flex flex-col gap-4 p-5 transition duration-200">
              {sidebarItem.map((i) => (
                <NavLink
                  to={i.link}
                  key={i.description}
                  className="text-black flex-1 pr-16 pl-2 py-2  text-xl  bg-white  hover:bg-gray-200 active:bg-slate-500 rounded-lg"
                >
                  <div className="flex items-center justify-start gap-2">
                    <span>{i.icon}</span>
                    <p>{i.description}</p>
                  </div>
                </NavLink>
              ))}
            </ul>
            :
            <ul className="flex flex-col gap-4 py-5 px-2 transition duration-200">
              {sidebarItem.map((i) => (
                <Link
                  to={i.link}
                  key={i.description}
                  className="text-black flex-1 px-2 py-2  text-xl  bg-white  hover:bg-gray-200 active:bg-slate-500 rounded-lg"
                >
                  <div className="flex items-center justify-start gap-2">
                    <span>{i.icon}</span>

                  </div>
                </Link>
              ))}
            </ul>
            }
            
          </nav>
        </div>
        {/* <h1 className="text-black font-semibold text-2xl px-2 bg-green-100 py-2">SuperMarket</h1>
        <nav className="h-full">
          <ul className="flex flex-col gap-4 p-5">
            {sidebarItem.map((i) => (
              <Link
                to={i.link}
                key={i.description}
                className="text-black flex-1 pr-16 pl-2 py-2  text-xl  bg-white  hover:bg-gray-200 active:bg-slate-500 rounded-lg"
              >
                <div className="flex items-center justify-start gap-2">
                  <span>{i.icon}</span>
                  <p>{i.description}</p>
                </div>
              </Link>
            ))}
          </ul>
        </nav> */}
      </aside>
    </>
  );
};

export default AdminSidebar;
