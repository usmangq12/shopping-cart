import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Navbar from "@/components/screens/HomeScreen/Navbar";
import { ProductGrid } from "@/components/screens/HomeScreen/ProductGrid";
import { SwiperCard } from "@/components/screens/HomeScreen/swiperCards/SwiperCard";
import { Products } from "@/constants/Product";

const Home = () => {
  const [products, setProducts] = useState(Products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text: string) => {
    console.log("Text: " + text);
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar showAccount={true} handleSearch={handleSearch} />
      <View style={styles.container}>
        <Text style={styles.popularItemsText}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>see all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <SwiperCard />
        <View style={styles.productCardView}>
          <ProductGrid products={filteredProducts} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  popularItemsText: { color: "black", fontWeight: "500" },
  seeAllText: { color: "#333", fontWeight: "300" },
  productCardView: { flex: 1 },
});

export default Home;
