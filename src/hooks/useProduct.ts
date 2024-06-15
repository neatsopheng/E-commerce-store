import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/apiClient";
import { IProduct } from "../entities/Product";

const apiClient = new ApiClient<IProduct[]>('/products');

const useProduct = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getAll,
    staleTime: 10000
  })
}

export default useProduct