import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import CartView from "../MainPage/CartView";
import useCategories from "../hooks/useCategory";
import CategoryFilter from "./CategoryFilter";

const NavbarOne = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCartView, setShowCartView] = useState(false);
  
  
  return (
    <nav className="md:px-20 md:py-5 px-5 py-2 mt-2 w-full fixed top-[-10px] flex gap-5 items-center justify-between border-b-8 bg-white ">
      <h1 className="font-bold text-3xl md:text-4xl text-green-600 whitespace-nowrap">
        PStore
      </h1>
      <form className="hidden  md:flex md:justify-between border py-1 border-gray-500 rounded-lg max-w-[650px] w-[650px] min-w-[350px] bg-white whitespace-nowrap ">
        <CategoryFilter />
        <input
          type="search"
          placeholder="Search..."
          className="ps-3 w-full outline-none border-l-2"
        />
        <button>
          <CiSearch
            fontSize={"26px"}
            cursor={"pointer"}
            className="bg-gray-300 w-12 rounded-2xl"
          />
        </button>
      </form>
      <form action="" className={`${showSearch ? 'border-2' : 'border-none'} p-1 flex md:hidden  flex-1 justify-end`}>
        <input
          placeholder="Search..."
          className={
            `${showSearch ? 'w-full': 'hidden'}  ps-3  outline-none`
          }
        />

        <div onClick={() => setShowSearch(!showSearch)}>
          <CiSearch
            fontSize={"26px"}
            cursor={"pointer"}
            className="bg-gray-300 w-12 rounded-2xl"
          />
        </div>
      </form>
      <ul className="flex gap-6">
        <li onClick={() => setShowCartView(true)}>
          <IoCart fontSize={"33px"} cursor={"pointer"} />
        </li>
        <li>
          <MdOutlineAccountCircle fontSize={"33px"} cursor={"pointer"} />
        </li>
      </ul>
      <CartView showCart={showCartView} setShowCartView={() => setShowCartView(false)}/>
      
    </nav>
  );
};

export default NavbarOne;
