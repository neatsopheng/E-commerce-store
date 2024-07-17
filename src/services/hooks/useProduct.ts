import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../apiClient";
import { IProduct } from "../../entities/Product";
import useProductQueryStore from "../../store/ProductQueryStore";

const apiClient = new ApiClient<IProduct[]>('/products');
console.log(apiClient.endpoint)

const useProduct = () => {
  const {productQuery} = useProductQueryStore();

  return useQuery<IProduct[]>({
    queryKey: ['products', productQuery.category],
    queryFn: () => apiClient.getAll({
      params: {
        category: productQuery.category
      }
    }),
    staleTime: 10000
  })
}

export default useProduct