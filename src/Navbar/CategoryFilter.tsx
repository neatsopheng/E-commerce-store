import useCategories from "../hooks/useCategory";

const CategoryFilter = () => {
    const {data, isLoading, error} = useCategories();
  if (isLoading) return null;
  if (error) throw error;
  console.log(data?.[1])
  return (
    <select name="" id="" className="px-3 py-2 outline-none">
        <option value="#">All Category</option>
          {data?.map((c) => 
            <option value={c}>{c}</option>
        )}
    </select>
  )
}

export default CategoryFilter