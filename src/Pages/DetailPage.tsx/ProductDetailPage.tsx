import { Link, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import BackNav from "../../shared/BackNav";
import useProductQueryStore from "../../store/ProductQueryStore";
import useFIlterCategory from "../../hooks/useFIlterCategory";
import { FaRegHeart } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct();
  const PDetail = data?.find((d) => d.id === parseInt(id!));

  const { data: categoryData, isPending } = useFIlterCategory(
    PDetail?.category!
  );
  // console.log(id);
  // console.log(PDetail?.id)

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Data not found</p>;

  return (
    <div className=" w-full m-0 p-3">
      <div className=" w-full bg-green-50 rounded-xl ">
        <BackNav />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 ">
          <img
            src={PDetail?.image}
            className="w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-auto p-5"
          />
          <div>
            <p className="font-bold text-2xl">US ${PDetail?.price}</p>
            <p className="text-whtie text-xl font-medium">{PDetail?.title}</p>
            <p className="mt-5">{PDetail?.description}</p>
            <p className="mt-5">{PDetail?.category}</p>
            <form className="mt-5">
              <p className="font-semibold">Quantity</p>
              <div className="flex items-center justify-start  gap-2">
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
              </div>
              <button
                type="submit"
                className="mt-5 border py-2 px-5 bg-yellow-600 text-white font-bold"
              >
                Add to cart
              </button>
            </form>
            {PDetail?.rating && (
              <p>
                Rating {PDetail?.rating && PDetail.rating.rate} by{" "}
                {PDetail?.rating && PDetail.rating.count} people
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <p>More Category</p>
        <div>
          <div>
            Box 1
          </div>
        </div>
      </div>

      <div>
        <p>Similar Item</p>
        <div className="w-[100%]  flex-1 bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center">
          {categoryData?.map((item) => (
            <div key={item.id}>
              <div className="w-72 h-auto  bg-gray-300 rounded-xl relative">
                <div className="w-full  h-64 bg-white  border-2 relative flex items-center justify-center overflow-hidden">
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
                <div className="p-1 h-52">
                  <a
                    href={`/products/${item.id}`}
                    className="text-sm md:text-md"
                  >
                    {item.title}
                  </a>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="font-bold absolute bottom-3 right-3">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
