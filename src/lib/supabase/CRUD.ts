import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./config";
import { IProduct } from "../../entities/Product";

// ======== Read Product
const fetchProduct = async () => {
    const response = await supabase.from('tbproduct').select('*');
    return response;
}
export const useReadProduct = () => useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
    staleTime: 10000
})

// ======= Delete
 const fetchDelete = async (id: number) => {
    const {data, error} = await supabase.from('tbproduct').delete().eq('pid', id);
    console.log(error);
    return data;
}

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
    
        mutationFn:async (id: number) => await fetchDelete(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['products']
        })
        
    })
}