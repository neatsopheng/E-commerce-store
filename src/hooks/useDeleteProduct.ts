import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ApiClient } from '../services/apiClient'

const apiClient = new ApiClient('products');

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:(id: number | string) => apiClient.deleteReq(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products']
      })
    }
  })
  
}

export default useDeleteProduct