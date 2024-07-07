import { FaShoppingBasket } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="bg-[#2c405c] w-auto p-5 text-white">
        <h3 className="text-2xl font-bold">Dashboard</h3>
        
        <div className="flex flex-row gap-5 flex-wrap justify-center">
            <div className="square bg-indigo-500">
                <div className="flex justify-between items-center text-2xl">
                    <h4>Products</h4>
                    
                    <FaShoppingBasket />

                </div>
                <p>256</p>
            </div>
            <div className="square bg-orange-500">
                <h4>Products</h4>
                <FaShoppingBasket />
                <p>256</p>
            </div>
            <div className="square bg-green-700">
                <h4>Products</h4>
                <FaShoppingBasket />
                <p>256</p>
            </div>
            <div className="square bg-red-700">
                <h4>Products</h4>
                <FaShoppingBasket />
                <p>256</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard