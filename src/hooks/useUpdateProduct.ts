import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ApiClient } from '../services/apiClient'
import { IProduct } from '../entities/Product';


const useUpdateProduct = (id:  number) => {
  const apiClient = new ApiClient(`products/${id}`)
  console.log(id)
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:(myObj: IProduct) => apiClient.updateReq(myObj),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products']
      })
    }
  })
}

export default useUpdateProduct