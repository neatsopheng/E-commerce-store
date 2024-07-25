import { useReadCate } from "../lib/supabase/CRUD";
import useProductQueryStore from "../store/ProductQueryStore";

const Sidebar = () => {
  // const { data } = useCategories();
  const {data} = useReadCate();
  const { setCategory, productQuery } =
    useProductQueryStore();
  console.log(productQuery.category);

  return (
    <div className="md:w-64 md:fixed md:left-0 md:top-0 hidden md:block mt-20  bg-slate-500 h-screen m-5 p-5 text-white rounded-xl overflow-y-scroll">
      <p className="font-bold text-3xl mb-8">Category</p>

      <ul>
        <li
          className="w-full bg-slate-400 text-black text-xl cursor-pointer h-12 my-2 flex items-center pl-1"
          onClick={() => setCategory(undefined!)}
        >
          All
        </li>
        {data?.map((c) => (
          <li
            key={c.id}
            className="w-full bg-slate-400 text-black text-xl cursor-pointer h-12 my-2 flex items-center pl-1"
            value={c.category}
            onClick={() => setCategory(c.category)}
          >
            {c}
          </li>
        ))}
      </ul>

      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
      <p className="font-bold text-3xl my-8">Filter by</p>
    </div>
  );
};

export default Sidebar;
