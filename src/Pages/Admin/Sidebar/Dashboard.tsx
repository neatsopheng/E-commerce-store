import { useState } from "react";
import {  MdOutlineCategory } from "react-icons/md";
import { AiFillProduct, AiOutlineDollar  } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { useReadProduct } from "../../../lib/supabase/CRUD";

const Dashboard = () => {
    const [hoverIndex, setHoverIndex] = useState(-1)
    const { data: readProduct} = useReadProduct();

      const TotalProduct = readProduct?.data
        ?.reduce((acc, cur) => {
          const price = parseFloat(cur.price);
          return acc + price;
        }, 0)
        .toFixed(2);
  const dashboardItem = [
    { title: "Product", total: 10, icon: <AiFillProduct />},
    { title: "Category", total: 4, icon: <MdOutlineCategory /> },
    { title: "Sum Price", total: "$" + TotalProduct, icon: <AiOutlineDollar />},
    { title: "Customer", total: "100", icon: <IoMdPeople />}
  ];
  return (
    <div className=" h-screen w-auto p-5 text-white">
      <h3 className="text-2xl mb-5 font-bold text-whtie">Dashboard</h3>

      <div className="flex flex-row gap-5 flex-wrap justify-center">
        {dashboardItem.map((i, index) => (
          <div className={`flex items-center py-5 px-2 justify-between w-60 border-t border-green-500 backdrop-blur-lg shadow-xl`}
          onMouseEnter={() => setHoverIndex(index) }
          onMouseLeave={() => setHoverIndex(-1)}
          >
            <div>
              <p className="text-md font-semibold">{i.title}</p>
              <p className="text-lg">{i.total}</p>
            </div>
            <div className={`text-4xl opacity-25 ${hoverIndex === index && "opacity-90"}`}>{i.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
