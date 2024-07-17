import { useState } from "react";
import { IProduct } from "../../../entities/Product";
import { useParams } from "react-router-dom";
import useUpdateProduct from "../../../services/hooks/useUpdateProduct";
// {
//   "id": 27,
//   "title": " Jacket Winter Coats",
//   "price": 76.99,
//   "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//   "category": "women's clothing",
//   "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//   "rating": {
//     "rate": 2.6,
//     "count": 235
//   }
// }

const UpdateProduct = () => {
  const [formValue, setFormValue] = useState<IProduct>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const { id } = useParams();
  const { mutateAsync: UpdateProduct, isPending } = useUpdateProduct(
    parseInt(id || "")
  );

  const handleUpdate = async () => {
    await UpdateProduct(formValue);
  };

  if (isPending) return <p>Uploading...</p>;
  return (
    <form
      onSubmit={async () => await handleUpdate()}
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
            setFormValue({ ...formValue, title: e.target.value });
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
