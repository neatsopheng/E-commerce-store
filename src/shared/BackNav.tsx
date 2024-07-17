import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackNav = () => {
    const navigate = useNavigate()
  return (
    <div className=" mb-10 h-10 w-fit px-4 py-2 cursor-pointer border-2 rounded-xl bg-yellow-300 hover:bg-yellow-500"
    onClick={() => navigate('/')}
    >
        <IoMdArrowRoundBack fontSize={'22px'} />

    </div>
    // @apply md:w-[75%] md:ml-[16rem] w-[100%];
  )
}

export default BackNav