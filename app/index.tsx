import { Navbar } from "@/components/HomeScreen/Navbar";
import { ProductCard } from "@/components/HomeScreen/ProductCard";
import { SwiperCard } from "@/components/HomeScreen/swiperCards/SwiperCard";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />

      <View style={styles.container}>
        <Text style={styles.popularItemsText}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>see all</Text>
        </TouchableOpacity>
      </View>

      <SwiperCard />

      <View style={styles.productCardView}>
        <ProductCard />
      </View>
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
export default HomeScreen;
