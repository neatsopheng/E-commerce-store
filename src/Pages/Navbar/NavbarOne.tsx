import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import CartView from "./CartView";
import CategoryFilter from "./CategoryFilter";
import { Link } from "react-router-dom";
import useCartQueryStore from "../../store/AddToCartStore";

const NavbarOne = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCartView, setShowCartView] = useState(false);
  const [scroll, setScroll] = useState(false);
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);

  return (
    <nav
      className={` md:px-20 sticky top-0 md:py-5 h-20 px-5 py-2 mt-2 w-full z-10 flex gap-5 items-center justify-between border-b-8 bg-white transition duration-[0.6s] `}
      onScroll={() => setScroll(!scroll)}
    >
      <h1 className="font-bold text-3xl md:text-4xl  whitespace-nowrap text-green-600 hover:text-green-300 transition duration-300">
        <Link to={"/"}>PStore</Link>
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
      <form
        action=""
        className={`${
          showSearch ? "border-2" : "border-none"
        } p-1 flex md:hidden  flex-1 justify-end`}
      >
        <input
          placeholder="Search..."
          className={`${showSearch ? "w-full" : "hidden"}  ps-3  outline-none`}
        />

        <div onClick={() => setShowSearch(!showSearch)}>
          <CiSearch
            fontSize={"26px"}
            cursor={"pointer"}
            className="bg-gray-300 w-12 rounded-2xl"
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
        <li>
          <Link to={"admin"}>
            <MdOutlineAccountCircle fontSize={"33px"} cursor={"pointer"} />
          </Link>
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
