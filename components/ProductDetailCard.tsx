import React, { Component, useEffect, useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Products } from "@/constants/Product";
import { Rating } from "react-native-ratings";
export const ProductDetailCard = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useLocalSearchParams();
  useEffect(() => {
    const data = Products.find((item) => {
      if (Number(id) === item.id) {
        return item;
      }
    });

    setProductDetail({ ...data });
  }, []);

  if (productDetail) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={productDetail.img}
          style={{ width: "100%", height: 400 }}
        />
        <View style={{ paddingHorizontal: 12 }}>
          <View style={styles.shopInfoContainer}>
            <Image
              source={require("@/assets/images/shopLogo.jpg")}
              style={styles.shopLogo}
            />
            <Text style={styles.shopName}>{productDetail.shopname}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "black", fontSize: 18 }}>
              {productDetail.title}
            </Text>
            <View style={{ gap: 4 }}>
              <Text
                style={{ fontWeight: "500", color: "#248DFF", fontSize: 18 }}
              >
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
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
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
  rating: {
    paddingVertical: 10,
   
  },
});
