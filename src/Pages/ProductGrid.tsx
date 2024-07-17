import useProduct from "../services/hooks/useProduct";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { ICart } from "../entities/Cart";
import useCartQueryStore from "../store/AddToCartStore";
import LoadingPage from "./LoadingPage";
import Homepage from "./HomePage";
import { toast, Toaster } from "sonner";

const ProductGrid = () => {
  const { data, isLoading, error } = useProduct();
  const addProduct = useCartQueryStore((s) => s.addProduct);
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (newItem: ICart) => {
    const existItem = CartItemQuery.find((i) => newItem.id === i.id);
    if (!existItem) {
      addProduct(newItem);

      setIsAdded(true);
      toast.success("Added");
    } else {
      toast.error("Item is in the cart");
    }
  };

  if (isLoading) return <LoadingPage />;
  if (error) return <p>Error fetching product</p>;
  if (!data) return <p>No Product available</p>;

  return (
    <>
      <Homepage />
      <Toaster position="bottom-right" richColors />
      <div>
        <p className="my-2 font-bold mx-5 text-2xl">POPULAR ITEM</p>
        <div className=" w-[100%]  flex-1 bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center">
          {data?.map((item) => (
            <div key={item.id}>
              <div className="w-72  h-auto  bg-gray-300 rounded-xl relative">
                <div className="w-full  h-72 bg-white  border-2 relative flex items-center justify-center overflow-hidden">
                  {/* ==================Top Part==================================== */}
                  <div className="absolute flex justify-between w-full top-2 px-3 ">
                    <button className="rounded-full">
                      <IoIosAddCircleOutline fontSize={"32px"} color="red" />
                    </button>
                    <button className="rounded-full">
                      <FaRegHeart fontSize={"25px"} className="text-red-500" />
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
                    href={`products/${item.id}`}
                    className="text-sm md:text-md font-semibold"
                  >
                    <p>
                      {item.title.slice(0, 50)}
                      <span>{item.title.length > 50 ? "....." : ""}</span>
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
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          totalPrice: item.price,
                          count: 1,
                          imgUrl: item.image,
                        })
                      }
                    >
                      Add to cart
                    </button>
                    <a href={`products/${item.id}`}>
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
