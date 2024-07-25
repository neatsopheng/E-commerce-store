import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { ICart } from "../entities/Cart";
import useCartQueryStore from "../store/AddToCartStore";
import LoadingPage from "./LoadingPage";
import Homepage from "./HomePage";
import { toast, Toaster } from "sonner";
import { useReadByCategory, useReadProduct } from "../lib/supabase/CRUD";
import useProductQueryStore from "../store/ProductQueryStore";

const ProductGrid = () => {
  // store
  const addProduct = useCartQueryStore((s) => s.addProduct);
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);
  const { productQuery } = useProductQueryStore();
  // fetch data hook
  const { data: readProduct, error, isLoading } = useReadProduct();
  const { data: readByCate } = useReadByCategory(productQuery.category!);

  // function for event
  const handleAddToCart = (newItem: ICart) => {
    const existItem = CartItemQuery.find((i) => newItem.id === i.id);
    if (!existItem) {
      addProduct(newItem);
      toast.success("Added");
    } else {
      toast.error("Item is in the cart");
    }
  };


  if (isLoading) return <LoadingPage />;
  if (error) return <p>Error fetching product</p>;
  return (
    <>
      <Homepage />
      <Toaster position="bottom-right" richColors />
      <div>
        <p className="my-2 font-bold mx-5 text-2xl">POPULAR ITEM</p>
        <div className=" w-[100%]  flex-1 bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center">
          {/*
          + At this point we make a condition to show data by category

           category === undefined ? map readProduct : map readByCategory 
           */}
          {!productQuery.category
            ? readProduct?.data?.map((item) => (
                <div key={item.pid}>
                  <div className="w-72  h-auto  bg-gray-300 rounded-xl relative">
                    <div className="w-full  h-72 bg-white  border-2 relative flex items-center justify-center overflow-hidden">
                      {/* ==================Top Part==================================== */}
                      <div className="absolute flex justify-between w-full top-2 px-3 ">
                        <button className="rounded-full">
                          <IoIosAddCircleOutline
                            fontSize={"32px"}
                            color="red"
                          />
                        </button>
                        <button className="rounded-full">
                          <FaRegHeart
                            fontSize={"25px"}
                            className="text-red-500"
                          />
                        </button>
                      </div>
                      <img
                        src={item.image}
                        className="w-44 h-auto hover:scale-105 transition duration-300"
                      />
                    </div>

                    {/* ===================    description     ============================================================================= */}
                    <div className="p-1 h-52 text-center">
                      <a
                        href={`products/${item.pid}`}
                        className="text-sm md:text-md font-semibold"
                      >
                        <p>
                          {item.pname.slice(0, 50)}
                          <span>{item.pname.length > 50 ? "....." : ""}</span>
                        </p>
                      </a>
                      <p className="text-gray-500">{item.category}</p>
                      <p className="font-bold text-red-500 bottom-50 right-5">
                        ${item.price}
                      </p>
                      <div className="flex flex-col items-center gap-2">
                        <button
                          className="border w-fit py-1 px-7 text-lg bg-yellow-500 font-semibold"
                          onClick={() =>
                            handleAddToCart({
                              id: item.pid,
                              title: item.pname,
                              price: parseFloat(item.price),
                              totalPrice: parseFloat(item.price),
                              count: 1,
                              imgUrl: item.image,
                            })
                          }
                        >
                          Add to cart
                        </button>
                        <a href={`products/${item.pid}`}>
                          <button className="border w-fit py-1 px-7 text-lg bg-yellow-600 font-semibold">
                            View Detail
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : readByCate?.data?.map((item) => (
                <div key={item.pid}>
                  <div className="w-72  h-auto  bg-gray-300 rounded-xl relative">
                    <div className="w-full  h-72 bg-white  border-2 relative flex items-center justify-center overflow-hidden">
                      {/* ==================Top Part==================================== */}
                      <div className="absolute flex justify-between w-full top-2 px-3 ">
                        <button className="rounded-full">
                          <IoIosAddCircleOutline
                            fontSize={"32px"}
                            color="red"
                          />
                        </button>
                        <button className="rounded-full">
                          <FaRegHeart
                            fontSize={"25px"}
                            className="text-red-500"
                          />
                        </button>
                      </div>
                      <img
                        src={item.image}
                        className="w-44 h-auto hover:scale-105 transition duration-300"
                      />
                    </div>

                    {/* ===================    description     ============================================================================= */}
                    <div className="p-1 h-52 text-center">
                      <a
                        href={`products/${item.pid}`}
                        className="text-sm md:text-md font-semibold"
                      >
                        <p>
                          {item.pname.slice(0, 50)}
                          <span>{item.pname.length > 50 ? "....." : ""}</span>
                        </p>
                      </a>
                      <p className="text-gray-500">{item.category}</p>
                      <p className="font-bold text-red-500 bottom-50 right-5">
                        ${item.price}
                      </p>
                      <div className="flex flex-col items-center gap-2">
                        <button
                          className="border w-fit py-1 px-7 text-lg bg-yellow-500 font-semibold"
                          onClick={() =>
                            handleAddToCart({
                              id: item.pid,
                              title: item.pname,
                              price: parseFloat(item.price),
                              totalPrice: parseFloat(item.price),
                              count: 1,
                              imgUrl: item.image,
                            })
                          }
                        >
                          Add to cart
                        </button>
                        <a href={`products/${item.pid}`}>
                          <button className="border w-fit py-1 px-7 text-lg bg-yellow-600 font-semibold">
                            View Detail
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
