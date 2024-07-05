import { Product, Products } from "@/constants/Product";
import { create } from "zustand";

type ProductStore = {
  products: Product[];
  addToWishList: (id: number) => void;
  removeFromWishList: (id: number) => void;
  addToCartWithQuantity: (id: number) => void;
  removeFromCartWithQuantity: (id: number) => void;
  getWishListItems: () => Product[];
  getAddToCartItems: () => Product[];
};

const useProductsStore = create<ProductStore>((set, get) => {
  return {
    products: Products,
    addToWishList: (id) =>
      set((state) => ({
        products: state.products.map((item) => {
          if (item.id === id) {
            item.wishList = true;
          }

          return item;
        }),
      })),
    removeFromWishList: (id) =>
      set((state) => ({
        products: state.products.map((item) => {
          if (item.id === id) {
            item.wishList = false;
          }
          return item;
        }),
      })),
    getWishListItems: () => {
      return get().products.filter((item) => item.wishList);
    },
    getAddToCartItems: () => {
      return get().products.filter((item) => item.addToCart);
    },
    addToCartWithQuantity: (id) =>
      set((state) => ({
        products: state.products.map((item) => {
          if (item.id === id) {
            item.addToCart = true;
            item.quantity = item.quantity + 1;
          }
          return item;
        }),
      })),
    removeFromCartWithQuantity: (id) =>
      set((state) => ({
        products: state.products.map((item) => {
          if (item.id === id) {
            if (item.quantity > 0) {
              item.quantity = item.quantity - 1;
            }
            if (item.quantity === 0) {
              item.addToCart = false;
            }
          }
          return item;
        }),
      })),
  };
});

export default useProductsStore;
