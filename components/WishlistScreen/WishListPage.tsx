import { Product } from "@/constants/Product";
import useProductsStore from "@/store/ProductsStore";
import React, { useEffect, useState } from "react";
import { AddToCart } from "../../common/SelectedProducts";

export const WishListPage = () => {
  const products = useProductsStore((state) => state.products);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  useEffect(() => {
    const filterProducts = products.filter((products) => products.wishList);
    setWishlistItems(filterProducts);
  }, []);
  return (
    <AddToCart
      products={wishlistItems}
      showBottomSheet={false}
      handleItems={setWishlistItems}
      showQuantity = {false}
    />
  );
};
