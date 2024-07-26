import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import CartView from "./CartView";
import { Link } from "react-router-dom";
import useCartQueryStore from "../../store/AddToCartStore";

const NavbarHome = () => {
  const [showCartView, setShowCartView] = useState(false);
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);

  return (
    <nav
      className={` md:px-20 sticky top-0 md:py-5 h-auto px-5 py-2 mt-2 w-full z-10 flex  gap-5 items-center justify-between border-b-8 bg-white transition duration-[0.6s] `}

    >
      <h1 className="font-bold text-xl md:text-2xl lg:text-4xl  whitespace-nowrap text-green-600 hover:brightness-150 transition duration-300">
        <Link to={"/"}>
          <span className="text-red-500 underline decoration-green-500 border-4 border-green-500 border-r-0 rounded-xl">Supheng</span>
          <span className="underline decoration-red-500 border-4 border-red-500 border-l-0 rounded-xl">Market</span>
         </Link>
      </h1>
      
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
          <Link to={"admin"} reloadDocument>
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

export default NavbarHome;
