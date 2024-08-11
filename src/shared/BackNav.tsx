import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackNav = () => {
  return (
    <Link to={'..'} 
    >
        <IoMdArrowRoundBack fontSize={'12px'} className="w-24 h-10 px-5 mb-10  text-sm cursor-pointer border-2 rounded-xl bg-yellow-300 hover:bg-yellow-500" />

    </Link>
  )
}

export default BackNav