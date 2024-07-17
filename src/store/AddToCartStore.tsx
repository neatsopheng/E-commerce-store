// import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface CartItem {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  totalPrice: number;
  count: number;
  isAdded?: boolean;
}
interface CartQueryStore {
  CartItemQuery: CartItem[];
  addProduct: (item: CartItem) => void;
  removeProduct: (id: number) => void;
  increaseCount: (id: number, newCount: number) => void;
  decreaseCount: (id: number, newCount: number) => void;
  updatePrice: (id: number, newPrice: number) => void;
  totalItemPrice: (id: number) => void;
  isAdded: (id: number) => void
}
// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cusCart") || '[]' )

const useCartQueryStore = create<CartQueryStore>((set) => ({
  CartItemQuery:  [],
  addProduct: (item: CartItem) =>
    set((store) => ({ 
      CartItemQuery: [
        {
          id: item.id,
          title: item.title,
          price: item.price,
          totalPrice: item.totalPrice,
          count: item.count,
          imgUrl: item.imgUrl  
        },
        ...store.CartItemQuery,
      ],
    })),
    removeProduct: (id: number) => set((state) => ({CartItemQuery: state.CartItemQuery.filter((i) => i.id !== id)})),
    increaseCount: (id: number, newCount: number) => set((state) => ({CartItemQuery: state.CartItemQuery.map((i) => i.id === id ? {...i, count: newCount } : i )})),
    decreaseCount: (id: number, newCount: number) => set((state) => ({CartItemQuery: state.CartItemQuery.map((i) => i.id === id ? {...i, count: newCount } : i )})),
    updatePrice: (id: number, newPrice: number) => set((state) => ({CartItemQuery: state.CartItemQuery.map((i) => i.id === id ? {...i, totalPrice: newPrice} : i)})),
    totalItemPrice: (id:number) => set((state) => ({CartItemQuery: state.CartItemQuery.map((i) => i.id === id ? {...i, totalPrice: i.count * i.price} : i)})),
    isAdded: (id: number) => set((state) => ({CartItemQuery: state.CartItemQuery.map((i) => i.id === id ? {...i, isAdded: !i.isAdded} : i)}))

  }));

// if (process.env.NODE_ENV === "development") {
//   mountStoreDevtool("CartQueryStore", useCartQueryStore<CartQueryStore>);
// }

export default useCartQueryStore;
//"/products?_sort=id&_order=desc"
