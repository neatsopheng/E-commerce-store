import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../apiClient";
import { IProduct } from "../../entities/Product";
import { TCategory } from "../../entities/Category";

// const apiClient = new ApiClient<TCategory>('/products/categories');
const apiClient = new ApiClient<TCategory>('/categories');

const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: apiClient.getAll,
    staleTime: 10000
  })
}

export default useCategories;