import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { router } from "expo-router";
import { Products } from "@/constants/Product";
import { AntDesign } from "@expo/vector-icons";

export const AddToCart = () => {
  const goBackNavigation = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={goBackNavigation}>
            <TabBarIcon
              name="arrow-back-outline"
              size={20}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source={Products[0].img}
          alt="Product Image"
        />

        <View style={styles.productDetails}>
          <View style={styles.productTitleContainer}>
            <Text style={styles.productTitle}>{Products[0].title}</Text>
            <Text style={styles.shopName}>{Products[0].shopname}</Text>
          </View>
          <View style={styles.productFooter}>
            <Text style={styles.productPrice}>{Products[0].price}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity>
                <AntDesign name="minuscircleo" size={16} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{Products[0].quantity}</Text>
              <TouchableOpacity>
                <AntDesign name="pluscircleo" size={16} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    paddingBottom: 24,
    borderBottomColor: "#d3d2d8",
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  backIconContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  icon: {
    marginBottom: 1,
  },
  headerText: {
    color: "black",
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
  },
  productContainer: {
    flexDirection: "row",
    gap: 12,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
  },
  productDetails: {
    flex: 1,
    justifyContent: "space-between",
  },
  productTitleContainer: {
    gap: 4,
  },
  productTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
  shopName: {
    fontSize: 12,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productPrice: {
    fontWeight: "600",
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    gap: 8,
    borderRadius: 50,
    borderColor: "#d3d2d8",
    borderWidth: 1,
    padding: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    fontWeight: "600",
    fontSize: 18,
  },
});


