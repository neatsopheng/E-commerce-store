import useProduct from "../../../hooks/useProduct";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import useDeleteProduct from "../../../hooks/useDeleteProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const { data } = useProduct();
  const { mutateAsync: deleteProduct } = useDeleteProduct();
  // const {mutateAsync: updateProduct} = useUpdateProduct();
  console.log(data);

  const handleDelete = async (id: number | string) => {
    const confirm = window.confirm("Deleting Product with ID: " + id);

    if (confirm) {
      await deleteProduct(id);
    }
  };

  const TotalProduct = data
    ?.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0)
    .toFixed(2);

  return (
    <>
      <div className="w-full block my-0 mx-auto p-10">
        <div className="bg-gray-800 mb-5 text-white w-[100%] whitespace-nowrap h-12 flex items-center justify-between px-5">
          <p className="font-semibold flex gap-2 items-center">
            <LuEye /> Viewing Product list
          </p>
          <div className="flex gap-5">
            <Link to={"add_product"}>
              <button className="bg-green-500 hover:bg-green-600 active:bg-green-500 px-5 py-2 text-white font-semibold rounded-sm">
                {" "}
                New Product
              </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-600 active:bg-red-500 px-5 py-2 text-white font-semibold rounded-sm" onClick={() => alert("Function not available yet!")}>
              Delete All
            </button>
          </div>
        </div>
        <table className="w-auto bg-gray-100">
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
            {data?.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-6 border-2">{item.id}</td>
                <td className="py-3 px-6 border-2">{item.title}</td>
                <td className="py-3 px-6 border-2">{item.price}</td>
                <td className="py-3 px-6 border-2">{item.category}</td>
                <td className="py-3 px-6 border-2">
                  <Link to={`update_product/${item.id}`}>
                    <button className=" text-yellow-500 text-2xl hover:text-yellow-600">
                      <CiEdit />
                    </button>
                  </Link>

                  <button
                    className=" text-red-500 text-xl hover:text-red-600"
                    onClick={async () => await handleDelete(item.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="font-bold text-2xl text-center">Total</td>
              <td className="font-bold text-2xl text-center">
                ${TotalProduct}
              </td>
            </tr>
          </tbody>
        </table>

        <ToastContainer />
      </div>
    </>
  );
};

export default AdminProduct;
