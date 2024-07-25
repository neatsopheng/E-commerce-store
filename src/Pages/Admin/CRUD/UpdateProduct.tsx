import { useState } from "react";
import { INewProduct} from "../../../entities/Product";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateProduct } from "../../../lib/supabase/CRUD";
import { toast } from "sonner";

const UpdateProduct = () => {
  const [formValue, setFormValue] = useState<INewProduct>({
    pname: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const { id } = useParams();
  // const { mutateAsync: UpdateProduct, isPending } = useUpdateProduct(
  //   parseInt(id || "")
  // );
  const {mutateAsync: updateProduct, isPending} = useUpdateProduct(parseInt(id || ""));
  const navigate = useNavigate();
  const handleUpdate = async () => {
    setFormValue({ ...formValue});
    const newProduct = await updateProduct(formValue);
    if (newProduct) {
      console.log("Added");
      navigate("/");
    }
    if (!newProduct) console.log("product add failed");

  }
  if (isPending) return <p>Uploading...</p>;

  if (isPending) return <p>Uploading...</p>;
  return (
    <form
      onSubmit={handleUpdate}
      className="w-[90%] h-screen bg-gray-300 rounded-xl mx-10 my-5 px-10 py-5 flex flex-col gap-5 border-2 "
    >
      <h3 className="font-bold text-2xl">Updating Product ID: {id}</h3>
      <div>
        <label htmlFor="" className="w-52 px-10">
          Product Title
        </label>
        <input
          type="text"
          className="form-input"
          required
          onBlur={(e) => {
            setFormValue({ ...formValue, pname: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="">Price</label>//
        <input
          type="text"
          className="form-input"
          required
          onChange={(e) => {
            setFormValue({ ...formValue, price: parseFloat(e.target.value) });
          }}
        />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <textarea
          className="form-input"
          required
          onInput={(e) => {
            setFormValue({ ...formValue, description: e.currentTarget.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          className="form-input"
          required
          onChange={(e) =>
            setFormValue({ ...formValue, category: e.target.value })
          }
        >
          <option value=""></option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's Clothing">Men's Clothing</option>
          <option value="women's Clothing">Men's Clothing</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Product Image</label>
        <input
          type="file"
          className=""
          onChange={(e) =>
            setFormValue({ ...formValue, image: e.target.value })
          }
        />
        <input
          type="text"
          className="form-input"
          placeholder="Image-url"
          onChange={(e) =>
            setFormValue({ ...formValue, image: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        className="border-2 py-1 px-4 w-fit bg-green-400 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default UpdateProduct;
// "id": 20,
// "title": "DANVOUY Womens T Shirt Casual Cotton Short",
// "price": 12.99,
// "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
// "category": "women's clothing",
// "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
// "rating": { "rate": 3.6, "count": 145 }
