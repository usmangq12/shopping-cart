import React from "react";
import { StyleSheet, View } from "react-native";

import useProductsStore from "@/store/ProductsStore";

import SellerProductCard from "./SellerProductCard";

export const SellerProductsGrid = () => {
  const products = useProductsStore((state) => state.products);

  return (
    <View style={styles.container}>
      <SellerProductCard products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 12 },
});
