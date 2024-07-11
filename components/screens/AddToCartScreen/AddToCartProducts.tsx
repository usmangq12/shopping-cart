import React, { useEffect, useState } from "react";

import { AddToCart } from "../../../common/SelectedProducts";
import useProductsStore from "@/store/ProductsStore";
import { Product, Products } from "@/constants/Product";

export const AddToCartProducts = () => {
  const products = useProductsStore((state) => state.products);

  const [addToCartItems, setAddToCartItems] = useState<Product[]>([]);
  useEffect(() => {
    const filterProducts = products.filter((products) => products.addToCart);
    setAddToCartItems(filterProducts);
  }, []);
  return (
    <AddToCart
      products={addToCartItems}
      showBottomSheet={true}
      handleItems={setAddToCartItems}
      showQuantity = {true}
    />
  );
};
