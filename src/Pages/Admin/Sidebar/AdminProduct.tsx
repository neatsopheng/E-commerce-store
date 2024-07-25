import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useReadProduct, useDeleteProduct } from "../../../lib/supabase/CRUD";

const AdminProduct = () => {
  const {
    data: readProduct,
    error: errorProduct,
    isLoading,
  } = useReadProduct();
  const { mutateAsync: deleteProduct } = useDeleteProduct();
 
  const TotalProduct = readProduct?.data
    ?.reduce((acc, cur) => {
      const price = parseFloat(cur.price);
      return acc + price;
    }, 0)
    .toFixed(2);

  if (errorProduct) return <p>error</p>;
  return (
    <>
      {readProduct?.error ? (
        <div className="text-red-500 bg-gray-300 text-2xl h-screen flex flex-col pt-10 items-center">
          <p>Error 404 not found</p>
          <p className="block">{readProduct.error.message}</p>
        </div>
      ) : (
        <div className="w-full block my-0 mx-auto p-10">
          <div className="bg-gray-800 mb-5 text-white w-[100%] whitespace-nowrap py-2 flex md:flex-row flex-col items-center justify-between px-5">
            <p className="font-semibold flex gap-2 items-center">
              <LuEye /> Viewing readProduct list
            </p>
            <div className="flex gap-5">
              <Link to={"add_product"}>
                <button className="bg-green-500 hover:bg-green-600 active:bg-green-500 px-5 py-2 text-white font-semibold rounded-sm">
                  {" "}
                  New Product
                </button>
              </Link>

              <button
                className="bg-red-500 hover:bg-red-600 active:bg-red-500 px-5 py-2 text-white font-semibold rounded-sm"
                onClick={() => alert("Function not available yet!")}
              >
                Delete All
              </button>
            </div>
          </div>
          <div className="w-full overflow-auto">
            {isLoading ? (
              <p className="text-center w-full text-white text-4xl animate-pulse p-5">
                Loading...
              </p>
            ) : (
              <table className="w-full bg-gray-100 text-sm md:text-md">
                <thead>
                  <tr>
                    <th className="py-3 px-6 border-2">ID</th>
                    <th className="py-3 px-6 border-2">Title</th>
                    <th className="py-3 px-6 border-2">Price</th>
                    <th className="py-3 px-6 border-2">Category</th>
                    <th className="py-3 px-6 border-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* data.map */}
                  {readProduct?.data?.map((item: any, index: number) => (
                    <tr
                      key={item.pid}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-green-300`}
                    >
                      <td className="py-1 px-3 md:py-3 md:px-6 border-2 text-red-700">
                        {item.pid}
                      </td>
                      <td className="py-1 px-3 md:py-3 md:px-6 border-2">
                        {item.pname}
                      </td>
                      <td className="py-1 px-3 md:py-3 md:px-6 border-2">
                        {item.price}
                      </td>
                      <td className="py-1 px-3 md:py-3 md:px-6 border-2">
                        {item.category}
                      </td>
                      <td className="py-1 px-3 md:py-3 md:px-6 border-2">
                        
                        <Link to={`update_product/${item.pid}`}>
                          <button className=" text-yellow-500 text-2xl hover:text-yellow-600">
                            <CiEdit />
                          </button>
                        </Link>

                        <button
                          className=" text-red-500 text-xl hover:text-red-600"
                          onClick={async () => {
                            await deleteProduct(item.pid);
                            toast.success("Deleted Successful id: " + item.pid);
                          }}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-bold text-2xl text-center py-4">
                      Total
                    </td>
                    <td className="font-bold text-2xl text-center py-4">
                      ${TotalProduct}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default AdminProduct;
