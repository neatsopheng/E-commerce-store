import { Link } from "react-router-dom"

const AdminNavbar = () => {
  return (
    <div className="md:pl-20 md:pr-15 sticky top-[0] left-0 md:py-5 h-20 px-5 py-2  w-full z-10 flex gap-5 items-center justify-between border-b-4 border-b-slate-600 bg-slate-800">
      <Link to={'/admin'}>
        <h1 className="font-bold text-3xl md:text-4xl  whitespace-nowrap text-green-600 hover:text-green-300 transition duration-300">
          PStore Admin
        </h1>
      </Link>
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8">
        <div className="text-white text-sm">Logged in as Admin1</div>
        <button className="border border-red-500 bg-red-500 text-white px-4 py-2 rounded-xl">Logout</button>
      </div>
    </div>
  )
}

export default AdminNavbar