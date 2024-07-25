import {  useRef } from "react";
import { CiTrash } from "react-icons/ci";
import useCartQueryStore from "../../store/AddToCartStore";
import { toast, Toaster } from "sonner";
import { useReactToPrint } from "react-to-print";
import CartPrint from "./CartPrint";

interface Prop {
  setShowCartView: () => void;
  showCart: boolean;
}

const CartView = ({ setShowCartView, showCart }: Prop) => {
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);
  const removeProduct = useCartQueryStore((s) => s.removeProduct);
  const increaseCount = useCartQueryStore((s) => s.increaseCount);
  const decreaseCount = useCartQueryStore((s) => s.decreaseCount);
  const totalItemPrice = useCartQueryStore((s) => s.totalItemPrice);
  const cartPrintRef = useRef(null);

  // console.log(itemCount)
  // console.log(CartItemQuery[0].count)
  const handlePrint = useReactToPrint({
    content: () => cartPrintRef.current,
  });
  const handleIncreaseCount = (id: number) => {
    const item = CartItemQuery.find((item) => item.id === id);
    increaseCount(id, item?.count! + 1);
    totalItemPrice(id);
  };
  const handleDecreaseCount = (id: number) => {
    const item = CartItemQuery.find((item) => item.id === id);
    decreaseCount(id, item?.count! - 1);
    totalItemPrice(id);
  };
  // i.count * i.price
  // const totalItemPrice = CartItemQuery.reduce((acc, cur) => {
  //   return acc + (cur.totalPrice * cur.count)
  // }, 0).toFixed(2);

  const TotalPrice = CartItemQuery.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0).toFixed(2);

  return (
    <>
      <Toaster />
      <CartPrint CartPrintRef={cartPrintRef} />
      <div
        onClick={() => setShowCartView()}
        className={`${
          showCart ? "visible opacity-100" : "invisible opacity-0"
        } absolute w-full top-0 left-0 backdrop-blur-none backdrop-brightness-75  h-screen transition duration-75`}
      ></div>

      <div
        className={`fixed right-0 z-20  w-[30.5rem] h-screen bg-[#f5eec2] text-white
        overflow-y-scroll no-scrollbar
        ${
          showCart ? "visible opacity-100" : "invisible opacity-0"
        }  top-0 transition-all ease-in duration-200`}
      >
        <div className="backdrop-blur-xl shadow-xl sticky top-0">
          <h1 className="font-bold text-2xl text-black p-5">Shopping Cart</h1>
          <button
            className="rounded-md cursor-pointer absolute right-5 top-5  border-2 border-red-500 hover:bg-red-500 hover:text-white text-red-500 px-3 py-1 text-lg transition"
            onClick={() => {
              setShowCartView();
              console.log(showCart);
            }}
          >
            ⌫
          </button>
        </div>
        <div className="flex flex-col justify-between h-screen  ">
          {/* Cart Item Start */}
          {/* ================= */}

          <ul className=" shadow-2xl border-black my-5 mx-3 p-2">
            {CartItemQuery.length === 0 ? (
              <p className="text-2xl text-red-700 text-center font-bold italic">
                Your Cart is Empty!
              </p>
            ) : (
              CartItemQuery?.map((i) => (
                <li
                  key={i.id}
                  className="bg-gray-100 my-5 text-black h-36 flex items-center justify-between px-3 gap-5 border-b"
                >
                  <img src={i.imgUrl} className="w-20 h-20" />
                  <div className=" flex-1">
                    <p className="text-yellow-700 font-bold text-lg">
                      {i.title.slice(0, 50)}
                    </p>
                    <div className="flex gap-4 items-center">
                      <p>Price: ${i.price}</p>
                      <div className="flex gap-2 items-center">
                        <button
                          className="text-red-950 text-4xl h-9 flex items-center rounded px-2 border border-gray-500 hover:bg-gray-200   transition"
                          onClick={() => handleDecreaseCount(i.id)}
                        >
                          -
                        </button>
                        <span className="bg-yellow-600 font-semibold text-white rounded py-1 px-3">
                          {i.count ? i.count : 1}
                        </span>
                        <button
                          className="text-red-950 text-2xl h-9 flex items-center rounded px-2 border border-gray-500 hover:bg-gray-200 transition"
                          onClick={() => handleIncreaseCount(i.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" text-end flex flex-col items-center justify-between gap-4 font-semibold">
                    <button
                      className="text-2xl"
                      onClick={() => {
                        removeProduct(i.id);
                        toast.success("ID: " + i.id + "removed");
                      }}
                    >
                      <CiTrash color="red" />
                    </button>
                    <span>${i.totalPrice.toFixed(2)}</span>
                  </div>
                </li>
              ))
            )}
          </ul>

          {/*============= Check Out Cart Part =======================*/}
          {/*============= Check Out Cart Part =======================*/}
          <div className="font-medium bg-[#e0d588] text-sm text-black text-end  mt-5 sticky bottom-0 right-0 h-36 w-full flex flex-col justify-between ">
            <div className="flex flex-row justify-between items-center h-full px-3">
              <p className="flex flex-col items-start text-lg">
                <span className="text-yellow-700 font-bold">SHIPPING</span>
                <span className="text-sm font-normal">
                  SPEND OVER 30$ and get free Shipping
                </span>
              </p>
              <p className="flex flex-col text-md items-center justify-center">
                <span>SubTotal</span>
                <span>{TotalPrice}</span>
              </p>
            </div>
            <button
              className="h-24 bg-[#416159] text-white text-xl font-bold hover:bg-[#416129] "
              onClick={() => handlePrint()}
            >
              CONTINUE TO CHECKOUT
            </button>
          </div>
        </div>
        {/* Cart Item End */}
      </div>
    </>
  );
};

export default CartView;
