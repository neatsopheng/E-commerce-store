import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ApiClient } from '../apiClient'
import { IProduct } from '../../entities/Product'

const apiClient = new ApiClient<IProduct>('products')

const useAddProduct = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (obj: IProduct) => apiClient.postReq(obj),
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["products"]
        })
    }
  })
}

export default useAddProduct
