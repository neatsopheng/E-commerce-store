import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface Prop {
  setShowCartView: () => void;
  showCart: boolean;
}

const CartView = ({ setShowCartView, showCart }: Prop) => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div
      className={`absolute right-0 z-20  md:w-[45%] lg:w-[40%] xl:w-[30%] h-auto bg-white py-4 px-5 ${
        showCart ? "md:block opacity-100" : "hidden opacity-0"
      }  top-0 transition-all ease-in duration-75`}
    >
      <h1 className="font-bold text-2xl text-black">Shopping Cart</h1>
      <button
        className="trounded-md cursor-pointer absolute right-5 top-5"
        onClick={() => {
          setShowCartView();
          console.log(showCart);
        }}
      >
        <IoMdCloseCircleOutline fontSize={"40px"} />
      </button>
      <div>
        {/* Cart Item */}
        {/* ================= */}

        <ul className="pt-10">
          <li className="bg-red-400 flex p-2 gap-5 items-center">
            <img src="https://hips.hearstapps.com/hmg-prod/images/mhl-0416240022-1-copy-66281eb9236bf.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
              className="w-20 h-20"
            />
            <div className="w-full">
              <p className="text-xl font-semibold">Men's Polo Shirt efdwrgggg</p>
              <p className="text-sm">Code: 129129</p>
              <p className="text-sm">Color: Green</p>
              <div className="flex flex-row justify-between">
                <div className="text-xl bg-gray-300 border border-black w-fit">
                  <button className="border  px-2" onClick={() => setCartCount(cartCount === 0 ? 0 : cartCount -1)}>-</button>
                  <span className="border  px-2">{cartCount}</span>
                  <button className="border  px-2" onClick={() => setCartCount(cartCount + 1)}>+</button>
                </div>
                  <span className="">Price: $14.99</span>
              </div>
            </div>
          </li>
        </ul>
        <p className="float-end mt-5">Subtotal (1 item): $14.99</p>
      </div>
    </div>
  );
};

export default CartView;
