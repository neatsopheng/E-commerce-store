import {  useState } from "react";
import useAddProduct from "../../../hooks/useAddProduct"
import { IProduct } from "../../../entities/Product";
import { useNavigate } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";


const AddProduct = () => {
  const {data} = useProduct();
  const [formValue, setFormValue] = useState<IProduct>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  })
  const {mutateAsync: CreateProduct, isPending} = useAddProduct();
  const navigate = useNavigate();
  console.log(formValue);
  console.log(data?.length)
  const handleSubmit = async () => {
    setFormValue({...formValue, id: data?.length! + 1})
    const newProduct = await CreateProduct(formValue);
      if(newProduct) {
        console.log('Added');
        navigate("/");
      }
      
      if (!newProduct) console.log('product add failed');
  }


  if (isPending) return <p>Uploading...</p>
  return (
    
    <form onSubmit={handleSubmit} className='w-[90%] h-screen mx-10 my-5 px-10 py-5   flex flex-col gap-5 border-2 bg-gray-200 rounded-xl '>
      <h3 className="font-bold text-2xl">Adding Product</h3>
      <div>
        <label htmlFor="" className="w-52 px-10">Product Title</label>
        <input type="text" className="form-input" required onBlur={(e)=>{setFormValue({...formValue, title: e.target.value })}}/>
      </div>
      <div>
        <label htmlFor="">Price</label>//
        <input type="text" className="form-input" required onChange={(e)=>{setFormValue({...formValue, price: parseFloat(e.target.value) })}}/>
      </div>
      <div>
        <label htmlFor="">Description</label>
        <textarea   className="form-input" required onInput={(e)=>{setFormValue({...formValue, description: e.currentTarget.value })}}/>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="category" className="form-input" required onChange={(e) => setFormValue({...formValue, category: e.target.value})}>
          <option value=""></option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's Clothing">Men's Clothing</option>
          <option value="women's Clothing">Men's Clothing</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Product Image</label>
        <input type="file" className="" onChange={(e) => setFormValue({...formValue, image: e.target.value})}/>
        <input type="text" className="form-input" placeholder="Image-url" onChange={(e) => setFormValue({...formValue, image: e.target.value})}/>
      </div>

      <button type="submit" className="border-2 py-1 px-4 w-fit bg-green-400 rounded-md">Submit</button>
      

    </form>
  )
}

export default AddProduct
// "id": 20,
// "title": "DANVOUY Womens T Shirt Casual Cotton Short",
// "price": 12.99,
// "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
// "category": "women's clothing",
// "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
// "rating": { "rate": 3.6, "count": 145 }