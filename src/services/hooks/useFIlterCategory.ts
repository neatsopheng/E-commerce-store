import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../apiClient";
import { IProduct } from "../../entities/Product";
import ms from "ms";


const useFIlterCategory = (targetCategory: string) => {
    const apiClient = new ApiClient<IProduct[]>(`/products/category/${targetCategory}`)
  return useQuery({
    queryKey: [targetCategory],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
  })
}

export default useFIlterCategory