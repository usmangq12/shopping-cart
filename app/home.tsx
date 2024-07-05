import Navbar from "@/components/HomeScreen/Navbar";
import { ProductGrid } from "@/components/HomeScreen/ProductGrid";
import { SwiperCard } from "@/components/HomeScreen/swiperCards/SwiperCard";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar  showAccount = {true}/>
      <View style={styles.container}>
        <Text style={styles.popularItemsText}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>see all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <SwiperCard />

        <View style={styles.productCardView}>
          {/** Should be called `ProductGrid` */}
          <ProductGrid />
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

export default home;
