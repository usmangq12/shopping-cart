import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";
import { AntDesign } from "@expo/vector-icons";
import { Product } from "@/constants/Product";

type ProductCardTypes = {
  products: Product[];
};
export const ProductCard = ({ products }: ProductCardTypes) => {
  const [addWishList, setAddWishList] = useState(false);
  const router = useRouter();

  const handleAddToWishList = () => {
    setAddWishList(!addWishList);
  };

  const handleNavigation = (id: number) => {
    router.push(`/productDetail/${id}`);
  };

  return (
    <View style={styles.row}>
      {products.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cardContainer}
          onPress={() => handleNavigation(item.id)}
        >
          <View style={styles.imageContainer}>
            <Image
              source={item.img}
              resizeMode="cover"
              style={styles.productImage}
            />
            <View style={styles.wishlistIconContainer}>
              <TouchableOpacity onPress={handleAddToWishList}>
                <AntDesign
                  name={addWishList ? "heart" : "hearto"}
                  size={14}
                  color="black"
                  style={styles.wishlistIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.ratingContainer}>
              <Rating
                type="star"
                showRating={false}
                ratingCount={5}
                startingValue={item.reviews}
                imageSize={12}
                style={styles.rating}
              />
            </View>
            <View style={styles.shopInfoContainer}>
              <Image
                source={require("@/assets/images/shopLogo.jpg")}
                style={styles.shopLogo}
              />
              <Text style={styles.shopName}>{item.shopname}</Text>
            </View>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    marginHorizontal: 12,
  },
  cardContainer: {
    flexBasis: "50%",
    paddingVertical: 6,
    backgroundColor: "#dee3e020",
    marginBottom: 12,
    borderRadius: 16,
    marginHorizontal: -6,
  },
  imageContainer: {
    position: "relative",
  },
  productImage: {
    height: 180,
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  wishlistIconContainer: {
    position: "absolute",
    right: 12,
    top: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },
  wishlistIcon: {
    marginTop: 2,
  },
  detailsContainer: {
    paddingHorizontal: 12,
  },
  ratingContainer: {
    alignItems: "flex-start",
  },
  rating: {
    paddingVertical: 10,
  },
  shopInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  shopLogo: {
    width: 14,
    height: 14,
    borderRadius: 50,
    marginRight: 4,
  },
  shopName: {
    fontSize: 8,
  },
  productTitle: {
    fontWeight: "500",
    marginVertical: 2,
    fontSize: 12,
  },
  productPrice: {
    fontWeight: "500",
    color: "#248DFF",
    fontSize: 12,
  },
});
