import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import useProductsStore from "@/store/ProductsStore";

import SellerProductCard, { SellerProductCardProps } from "./SellerProductCard";
import { supabase } from "@/lib/supabase";

export const SellerProductsGrid = () => {
  // const products = useProductsStore((state) => state.products);
  const [products, setProducts] = useState<any | null>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("Products").select();
      if (error) {
        console.error("Error fetching products", error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, [products]);
  return (
    <View style={styles.container}>
      {products && <SellerProductCard products={products} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 12 },
});
