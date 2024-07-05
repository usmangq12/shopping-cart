import React, { useCallback, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { TabBarIcon } from "../components/navigation/TabBarIcon";
import { router } from "expo-router";
import { Product } from "@/constants/Product";
import { AntDesign } from "@expo/vector-icons";
import { CartBottomSheet } from "../components/AddToCartScreen/CartBottomSheet";
import { useFocusEffect } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import useProductsStore from "@/store/ProductsStore";

export type AddToCartProps = {
  products: Product[];
  showBottomSheet: boolean;
  handleItems: (items: Product[]) => void;
  showQuantity: boolean;
};
export const AddToCart = ({
  products,
  showBottomSheet,
  handleItems,
  showQuantity,
}: AddToCartProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const addToCart = useProductsStore((state) => state.addToCartWithQuantity);
  const removeFromCart = useProductsStore(
    (state) => state.removeFromCartWithQuantity
  );
  const removeWishlistItem = useProductsStore(
    (state) => state.removeFromWishList
  );

  useFocusEffect(
    useCallback(() => {
      bottomSheetRef.current?.present();
    }, [])
  );

  const goBackNavigation = () => {
    router.back();
  };

  const handleAddToCart = (id: number) => {
    addToCart(id);
    updateCartProducts();
  };

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
    updateCartProducts();
  };

  const handleRemoveWishlistItem = (id: number) => {
    removeWishlistItem(id);
  };
  const updateCartProducts = () => {
    const updatedProducts = products.filter(
      (product) => product.addToCart && product.quantity > 0
    );
    handleItems(updatedProducts);
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
        <Text style={styles.headerText}>
          {showQuantity ? "Cart" : "Wishlist"}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={showBottomSheet && { paddingBottom: 220 }}
        showsVerticalScrollIndicator={false}
      >
        {products.length === 0 ? (
          <View style={styles.container}>
            <Text style={styles.title}>There is no item here </Text>
          </View>
        ) : (
          products.map((product, index) => (
            <View style={styles.productContainer} key={index}>
              <Image
                style={styles.productImage}
                source={product.img}
                alt="Product Image"
              />
              <View style={styles.productDetails}>
                <View style={styles.productTitleContainer}>
                  <Text style={styles.title}>{product.title}</Text>
                  <Text style={styles.shopName}>{product.shopname}</Text>
                </View>
                <View style={styles.productFooter}>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  {showQuantity ? (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleRemoveFromCart(product.id)}
                      >
                        <AntDesign
                          name="minuscircleo"
                          size={16}
                          color="black"
                        />
                      </TouchableOpacity>
                      <Text style={styles.quantity}>{product.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => handleAddToCart(product.id)}
                      >
                        <AntDesign name="pluscircleo" size={16} color="black" />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        handleRemoveWishlistItem(product.id);
                      }}
                    >
                      <AntDesign
                        name={product.wishList ? "heart" : "hearto"}
                        size={14}
                        color="black"
                        style={styles.wishlistIcon}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      {showBottomSheet && <CartBottomSheet ref={bottomSheetRef} />}
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
    marginBottom: 24,
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
  title: {
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
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  wishlistIcon: {
    marginTop: 2,
  },
});
