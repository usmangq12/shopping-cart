import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Rating } from "react-native-ratings";
import { AntDesign } from "@expo/vector-icons";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { useRouter } from "expo-router";
import { CommonButton } from "@/common/Button";
import { Product, Products } from "@/constants/Product";
import { Screens } from "@/constants/routes";

export const ProductDetailCard = () => {
  // we need to place a loading state too

  // better to just call product
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [addWishList, setAddWishList] = useState(false);
  // Add error handling, add a useEffect to navigate user back to home page if id not found

  const { id } = useLocalSearchParams<{ id: string }>();

  const router = useRouter();

  useEffect(() => {
    const data = Products.find((item) => item.id === Number(id));
    if (data) {
      setProductDetail(data);
    }
  }, [id]);

  const handleAddToWishList = () => {
    setAddWishList(!addWishList);
  };
  const goBackNavigation = () => {
    router.back();
  };
  const orderDetailNavigation = () => {
    router.navigate(Screens.AddToCart);
  };

  if (!productDetail) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={productDetail.img}
            style={styles.productImage}
            testID="product-image"
          />
          <View style={styles.wishlistIconContainer}>
            <TouchableOpacity onPress={handleAddToWishList}>
              <AntDesign
                name={addWishList ? "heart" : "hearto"}
                size={18}
                color="black"
                style={styles.wishlistIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.wishlistIconContainer, styles.backButton]}>
            <TouchableOpacity onPress={handleAddToWishList}>
              <TabBarIcon
                name="arrow-back-outline"
                size={20}
                color="black"
                style={styles.backIcon}
                onPress={goBackNavigation}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productDetails}>
          <View style={styles.shopInfoContainer}>
            <Image
              source={require("@/assets/images/shopLogo.jpg")}
              style={styles.shopLogo}
            />
            <Text style={styles.shopName} testID="shop-name">
              {productDetail.shopname}
            </Text>
          </View>
          <View style={styles.productTitleContainer}>
            <Text style={styles.productTitle} testID="title">
              {productDetail.title}
            </Text>
            <View style={styles.priceAndRating}>
              <Text style={styles.productPrice} testID="price">
                {productDetail.price}
              </Text>
              <Rating
                type="star"
                showRating={false}
                ratingCount={5}
                startingValue={productDetail.reviews}
                imageSize={12}
                style={styles.rating}
              />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText} testID="description">
              {productDetail.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <CommonButton title="Add to Cart" onPress={orderDetailNavigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 400,
  },
  wishlistIconContainer: {
    position: "absolute",
    right: 16,
    top: 40,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },
  backButton: {
    left: 16,
  },
  wishlistIcon: {
    marginTop: 2,
  },
  backIcon: {
    marginBottom: 1,
  },
  productDetails: {
    paddingHorizontal: 12,
  },
  shopInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  shopLogo: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 4,
  },
  shopName: {
    fontSize: 12,
  },
  productTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productTitle: {
    color: "black",
    fontSize: 18,
  },
  priceAndRating: {
    gap: 4,
  },
  productPrice: {
    fontWeight: "500",
    color: "#248DFF",
    fontSize: 18,
  },
  rating: {
    paddingVertical: 10,
  },
  descriptionContainer: {
    gap: 4,
  },
  descriptionTitle: {
    fontWeight: "500",
    color: "black",
    fontSize: 16,
  },
  descriptionText: {
    color: "grey",
    textAlign: "justify",
  },
});
