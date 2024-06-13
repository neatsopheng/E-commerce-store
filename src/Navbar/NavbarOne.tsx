import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";



const NavbarOne = () => {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="md:px-20 md:mt-10 px-5 mt-2 flex gap-5 items-center justify-between border-b-8">
        <h1 className="font-bold text-3xl md:text-4xl text-green-600 whitespace-nowrap">Store</h1>  
        <form className="hidden  md:flex md:justify-between border py-1 border-gray-500 rounded-lg max-w-[650px] w-[650px] min-w-[350px] bg-white whitespace-nowrap ">
            <select name="" id="" className="px-3 py-2 outline-none">
                <option value="">All Category</option>
                <option value="">Clothing</option>
                <option value="">Accessories</option>
            </select>
            <input type="search" placeholder="Search..." className="ps-3 w-full outline-none border-l-2" />
            <button>
                <CiSearch fontSize={'26px'} cursor={'pointer'} className="bg-gray-300 w-12 rounded-2xl" />
            </button>
        </form>
        <form action="" className="flex border-2">
        <input  placeholder="Search..." className={showSearch ? `w-full ps-3  outline-none border-l-2` : `w-0`} />

        <div onClick={() => setShowSearch(!showSearch)}>
                <CiSearch fontSize={'26px'} cursor={'pointer'} className="bg-gray-300 w-12 rounded-2xl" />
        </div>
        </form>
        <ul className="flex gap-6">
            <li>
                <IoCart fontSize={'33px'} cursor={'pointer'}/>
            </li>
            <li>
                <MdOutlineAccountCircle fontSize={'33px'} cursor={'pointer'}/>
            </li>
        </ul>
    </nav>
  )
}

export default NavbarOne