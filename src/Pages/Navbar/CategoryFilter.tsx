import { useState } from "react";
import useCategories from "../../services/hooks/useCategory";
import useProductQueryStore from "../../store/ProductQueryStore";

const CategoryFilter = () => {
  const { data, isLoading, error } = useCategories();
  const [selectedValue, setSelectedValue] = useState("All Category");
  const { setCategory, productQuery, setProductQueryNull } =
    useProductQueryStore();
  if (isLoading) return null;
  if (error) throw error;
  console.log(productQuery.category);

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
      {data?.map((c) => (
        <option value={c} key={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
