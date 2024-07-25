import useProductQueryStore from "../../store/ProductQueryStore";
import { useReadCate } from "../../lib/supabase/CRUD";

const CategoryFilter = () => {
  const {data: category, isLoading, error} = useReadCate();
  const { setCategory } = useProductQueryStore();
  if (isLoading) return null;
  if (error) return null;
  console.log(category);

  return (
    <select
      name="category"
      id="category"
      className="px-3 py-2 outline-none"
      onChange={(e) =>
        setCategory(
          e.target.value !== "All_Category" ? e.target.value : undefined!
        )
      }
    >
      <option value="All_Category">All Category</option>
      {category?.map((c) => (
        <option value={c.category} key={c.id}>
          {c.category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
