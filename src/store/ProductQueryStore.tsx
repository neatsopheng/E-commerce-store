import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

// model
interface Productquery {
  category?: string;
  search?: string;
}

// store
interface ProductQueryStore {
  productQuery: Productquery;
  setCategory: (category: string) => void;
  setSearchText: (searchedText: string) => void;
  setProductQueryNull: () => void;
}

const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery: {},
    setCategory: (category) => set(store => ({productQuery: {...store.productQuery, category}})),
    setSearchText: (searchedText) => set({productQuery: {search: searchedText}}),
    setProductQueryNull: () => set({productQuery: {} })
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('ProductQueryStore', useProductQueryStore<ProductQueryStore>)
}

export default useProductQueryStore;
//"/products?_sort=id&_order=desc"