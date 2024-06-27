import useProduct from "../hooks/useProduct";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IProduct } from "../entities/Product";
import useFIlterCategory from "../hooks/useFIlterCategory";
import useProductQueryStore from "../store/ProductQueryStore";

// sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 300px) 40vw"
const ProductGrid = () => {
  const [category, setCategory] = useState(false);
  const { data, isLoading, error } = useProduct();
  // const {data: categoryData} = useFIlterCategory('jewelery');

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error fetching product</p>;

  const handleAddProduct = (pID: number) => {
    // pass PID to cart store
  }

  return (
    <div className="md:w-[75%] md:ml-[16rem] w-[100%]  flex-1 bg-white p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center">
      {data?.map((item) => (
        <div key={item.id}>
          <div className="w-56 md:w-60 h-auto  bg-gray-300 rounded-xl relative">
            <div className="w-full md:w-60 h-64 bg-white  border-2 relative flex items-center justify-center">
              <div className="absolute flex justify-between w-full top-2 px-3">
                <button className="rounded-full">
                  <IoIosAddCircleOutline fontSize={"32px"} color="red" />
                </button>
                <button className="rounded-full">
                  <FaRegHeart fontSize={"25px"} className="text-red-500" />
                </button>
              </div>
              <img
                src={item.image}
                className="w-32 h-auto hover:scale-105 transition duration-300"
              />
            </div>

            {/* ===================    description     ============================================================================= */}
            <div className="p-1 h-52">
              <Link to={`products/${item.id}`} className="text-sm md:text-md">
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
    </div>
  );
};

export default ProductGrid;
