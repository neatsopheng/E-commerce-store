import { useParams } from "react-router-dom";
import BackNav from "../../shared/BackNav";
// import { FaRegHeart } from "react-icons/fa";
// import { IoIosAddCircleOutline } from "react-icons/io";
import { ICart } from "../../entities/Cart";
import { toast, Toaster } from "sonner";
import useCartQueryStore from "../../store/AddToCartStore";
import { useReadSingleProduct } from "../../lib/supabase/CRUD";

const ProductDetailPage = () => {
  const { id } = useParams();
  const {data: DetailProduct, isLoading, error} = useReadSingleProduct(parseInt(id || ''));

  
  const CartItemQuery = useCartQueryStore((s) => s.CartItemQuery);
  const addProduct = useCartQueryStore((s) => s.addProduct);
  console.log(DetailProduct?.data)


  const handleAddToCart = (newItem: ICart) => {
    const existItem = CartItemQuery.find((i) => newItem.id === i.id);
    if (!existItem) {
      addProduct(newItem);

      toast.success("Added");
    } else {
      toast.error("Item is in the cart");
    }
  };
  console.log(error)

  // const { data: categoryData, error: errorCategory } = useFIlterCategory(
  //   PDetail?.category!
  // );
  // {
  //   errorCategory && <p className="text-4x">Nothing to show</p>;
  // }
  // // if (isLoading) return <p>Loading</p>;
  // if (error) return <p>Data not found</p>;

  return (
    <>
      {isLoading ? (
        <p className="w-full text-4xl p-5 text-center animate-pulse font-extrabold">Loading...</p>
      ) : (
        !error ?
        <div className=" w-full m-0 p-3">
          <Toaster richColors />
          <div className=" w-full bg-green-50 rounded-xl ">
            <BackNav />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 ">
              <img
                src={DetailProduct?.data.image}
                className="w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-auto p-5"
              />
              <div>
                <p className="font-bold text-2xl">US ${DetailProduct?.data.price}</p>
                <p className="text-whtie text-xl font-medium">
                  {DetailProduct?.data.pname}
                </p>
                <p className="mt-5">{DetailProduct?.data.description}</p>
                <p className="mt-5">{DetailProduct?.data.category}</p>
                <div className="mt-5">
                  <p className="font-semibold">Quantity</p>
                  {/* <div className="flex items-center justify-start  gap-2">
                  <button
                    type="button"
                    className="border-none h-12 w-12 text-5xl bg-gray-200 items-center rounded-md"
                  >
                    -
                  </button>
                  <label
                    htmlFor=""
                    id="quantity"
                    className="border-none h-12 w-12 text-center text-3xl bg-gray-200 flex items-center justify-center rounded-md"
                  >
                    1
                  </label>
                  <button
                    type="button"
                    className="border-none h-12 w-12 text-3xl bg-gray-200 items-center rounded-md"
                  >
                    +
                  </button>
                </div> */}
                  <button
                    type="submit"
                    className="mt-5 border py-2 px-5 bg-yellow-600 text-white font-bold"
                    onClick={() =>
                      handleAddToCart({
                        id: DetailProduct?.data.pid,
                        title: DetailProduct?.data.pname,
                        price: parseFloat(DetailProduct?.data.price),
                        totalPrice: parseFloat(DetailProduct?.data.price),
                        count: 1,
                        imgUrl: DetailProduct?.data.image,
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
                {DetailProduct?.data.rating && (
                  <p>
                    Rating {DetailProduct?.data.rating && DetailProduct?.data.rating.rate} by{" "}
                    {DetailProduct?.data.rating && DetailProduct?.data.rating.count} people
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* <div>
          <p>More Category</p>
          <div className="flex gap-5">
            <Link
              to={"/"}
              className="bg-green-200 h-32 w-52 border-4 border-green-400 flex items-center justify-center"
              onClick={() => {
                setCategory("men's clothing");
              }}
            >
              <div>Men Clothing</div>
            </Link>
            <div className="bg-green-200 outline-gr">
              <div>Box 2</div>
            </div>
          </div>
        </div> */}

          <div>
            <p className="font-bold text-2xl my-5 ml-5 p-2 rounded-xl bg-gray-100 w-fit">
              Similar Item
            </p>
            <hr />
            {/* <div className="w-[100%]  flex-1 bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center">
              {categoryData?.map((item) => (
                <div key={item.id}>
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

                    <div className="p-1 h-52">
                      <Link
                        to={`/products/${item.id}`}
                        className="text-sm md:text-md"
                      >
                        {item.title}
                      </Link>
                      <p className="text-gray-500">{item.category}</p>
                      <p className="font-bold absolute bottom-3 right-3">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

          </div>
          {/* <p>{cartItem.map((i) =>
        <p>{i.title}</p>
      )}</p> */}
        </div>
        :
        <p>Null</p>
      )}
    </>
  );
};

export default ProductDetailPage;
