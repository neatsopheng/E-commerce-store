import { FaRegHeart } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useReadByCategory } from "../../lib/supabase/CRUD"
import { toast } from "sonner";
import { ICart } from "../../entities/Cart";
import useCartQueryStore from "../../store/AddToCartStore";
import { Link } from "react-router-dom";

interface Props {
    currentCate: string;
}

const RelevantItem = ({currentCate}: Props) => {
    const {data: categoryData, error} = useReadByCategory(currentCate);
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);
  const addProduct = useCartQueryStore((s) => s.addProduct);




    const handleAddToCart = (newItem: ICart) => {
        const existItem = CartItemQuery.find((i) => newItem.id === i.id);
        if (!existItem) {
          addProduct(newItem);
    
          toast.success("Added");
        } else {
          toast.error("Item is in the cart");
        }
      };
    if (error) return null;
  return (
    <div>
            <p className="font-bold text-2xl my-5 ml-5 p-2 rounded-xl bg-gray-100 w-fit">
              Similar Item
            </p>
            <hr />
            <div className="w-[100%]  flex-1 bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center">
              {categoryData?.data?.map((item, index) => (
                <div key={index}>
                  <div className="w-72 h-auto  bg-gray-300 rounded-xl relative">
                    <div className="w-full  h-64 bg-white  border-2 relative flex items-center justify-center overflow-hidden">
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
                      <Link
                        to={`../${item.pid}`}
                        className="text-sm md:text-md font-semibold"
                      >
                        <p>
                          {item.pname.slice(0, 50)}
                          <span>{item.pname.length > 50 ? "....." : ""}</span>
                        </p>
                      </Link>
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
                        <Link to={`../${item.pid}`}>
                          <button className="border w-fit py-1 px-7 text-lg bg-yellow-600 font-semibold">
                            View Detail
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
  )
}

export default RelevantItem

