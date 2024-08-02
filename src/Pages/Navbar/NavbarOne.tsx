import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import CartView from "./CartView";
import CategoryFilter from "./CategoryFilter";
import { Link, useNavigate } from "react-router-dom";
import useCartQueryStore from "../../store/AddToCartStore";
import useProductQueryStore from "../../store/ProductQueryStore";

const NavbarOne = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCartView, setShowCartView] = useState(false);
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);
  const setSearch = useProductQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <nav
      className={` md:px-20 sticky top-0 md:py-5 h-auto px-5 py-2 mt-2 w-full z-10 flex  gap-5 items-center justify-between border-b-8 bg-white transition duration-[0.6s] `}
    >
      <h1 className="font-bold text-xl md:text-2xl lg:text-4xl  whitespace-nowrap text-green-600 hover:brightness-150 transition duration-300">
        <Link to={"/"}>
          <span className="text-red-500 underline decoration-green-500 border-4 border-green-500 border-r-0 rounded-xl">
            Supheng
          </span>
          <span className="underline decoration-red-500 border-4 border-red-500 border-l-0 rounded-xl">
            Market
          </span>
        </Link>
      </h1>

      <form className="hidden  md:flex md:justify-between border py-1 border-gray-500 rounded-lg max-w-[650px] w-[650px] min-w-[350px] bg-white whitespace-nowrap ">
        <CategoryFilter />
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
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
      <form
        className={`${
          showSearch ? "border-2 bg-gray-300 rounded-xl   " : "border-none"
        } flex items-center justify-center md:hidden  w-full  border-2 flex-1  `}
      >
        {showSearch && (
          <div onClick={() => setShowSearch(false)}>
            <IoIosArrowBack fontSize={"36px"} cursor={"pointer"} />
          </div>
        )}
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className={`${
            showSearch ? "w-full" : "hidden"
          }  ps-3 py-2 mx-10 text-lg  outline-none `}
        />

        <div onClick={() => setShowSearch(true)}>
          <CiSearch
            fontSize={"39px"}
            cursor={"pointer"}
            className=" w-12 rounded-2xl bg-gray-300 p-1"
          />
        </div>
      </form>
      <ul className="flex gap-6 items-center">
        <li
          onClick={() => setShowCartView(true)}
          className="flex cursor-pointer border-2 border-yellow-500 rounded-xl p-1"
        >
          <IoCart fontSize={"33px"} cursor={"pointer"} />
          {CartItemQuery.length !== 0 && (
            <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {CartItemQuery.length}
            </span>
          )}
        </li>
        <li onClick={() => navigate("/admin")}>
          <div>
            <MdOutlineAccountCircle fontSize={"33px"} cursor={"pointer"} />
          </div>
        </li>
      </ul>
      <CartView
        showCart={showCartView}
        setShowCartView={() => setShowCartView(false)}
      />
    </nav>
  );
};

export default NavbarOne;
