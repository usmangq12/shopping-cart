import { Products } from "@/constants/Product";
import { useRouter } from "expo-router";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

export const SecondSwiperCard = () => {
  const router = useRouter();
  const NavigateToProduct = () => {
    router.navigate("productDetail");
  };

  {
    return (
      <TouchableOpacity
        style={styles.child}
        onPress={NavigateToProduct}
      >
        <View style={[styles.imageContainer]}>
          <Image
            source={Products[3].img}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.saleContainer}>
            <Text style={styles.text}>{` Sale upto 20% \n for Today`}</Text>
            <View>
              <TouchableOpacity style={styles.shopNowButton}>
                <Text>shop now </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  child: {
    width: width,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 24,
    backgroundColor: "#F1DAC8"
  },
  imageContainer: {
    flexDirection: "row",
    gap: 10,
    borderBottomRightRadius: 24,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#5A5A5A",
    fontWeight: "bold",
  },
  saleContainer: {
    flex: 1,
    gap: 28,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 24,
  },
  shopNowButton: {
    borderRadius: 50,
    backgroundColor: "white",
    padding: 8,
    marginLeft: 24,
  },
});
