import React from "react";
import { StyleSheet, View } from "react-native";

import useProductsStore from "@/store/ProductsStore";
import { ProductCard } from "./ProductCard";

// Really could use the composibility here
export const ProductGrid = () => {
  const products = useProductsStore((state) => state.products);

  return (
    <View style={styles.container}>
      <ProductCard products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 12 },
});
