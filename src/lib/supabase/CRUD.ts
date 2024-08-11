import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./config";
import ms from "ms";
import { INewProduct } from "../../entities/Product";

// ======== Read Product
const fetchProduct = async () => {
    const response = await supabase.from('tbproduct').select('*');
    return response;
}
export const useReadProduct = () => useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
    staleTime: ms('24h')
})
// ==== Read Single Specific Product
const fetchSingleProduct = async (productId: number) => {
    const response = await supabase.from('tbproduct').select().eq('pid', productId).single();
    return response.data;
}
export const useReadSingleProduct = (productId: number) => useQuery({
    queryKey: ['products', productId],
    queryFn: () => fetchSingleProduct(productId),
    staleTime: ms('24h')
})

// ========= Fetch Category
const fetchCate = async () => {
    const response = await supabase.from('tbcategory').select();
    return response.data;
}
export const useReadCate = () => useQuery({
    queryKey: ['allCategory'],
    queryFn: fetchCate,
    staleTime: ms('24h')
})

// ========= Read Product by category

const fetchByCategory = async (category?: string) => {
    const response = await supabase.from('tbproduct').select().eq('category', category);
    return response;
}

export const useReadByCategory = (category: string) => useQuery({
    queryKey: ['category', category],
    queryFn: () => fetchByCategory(category),
    staleTime: ms('24h')
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

// ================ Insert Product
const fetchInsert = async (newProduct: INewProduct) => {
    const response = await supabase.from('tbproduct').insert([
        {
            'pname': newProduct.pname,
            'price': newProduct.price, 
            'category': newProduct.category, 
            'description': newProduct.description, 
            'image': newProduct.image,
            'rate': newProduct.rating?.rate,
            'ratecount': newProduct.rating?.count
        }    
    ]).select()
    return response
}

export const usePostProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProduct: INewProduct) => fetchInsert(newProduct),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['products']
        })
    })
}
// ================ Update Product
const fetchUpdate = async (id: number, newProduct: INewProduct) => {
    const response = await supabase.from('tbproduct').update([
        {
            'pname': newProduct.pname,
            'price': newProduct.price, 
            'category': newProduct.category, 
            'description': newProduct.description, 
            'image': newProduct.image,
            'rate': newProduct.rating?.rate,
            'ratecount': newProduct.rating?.count
        }    
    ])
    .eq('pid', id)
    .select()
    return response
}

export const useUpdateProduct = (id:number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProduct: INewProduct) => fetchUpdate(id, newProduct),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['products']
        })
    })
}