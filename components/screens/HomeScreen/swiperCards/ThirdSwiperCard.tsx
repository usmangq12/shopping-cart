
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";

import { useRouter } from "expo-router";

export const ThirdSwiperCard = () => {
  const router = useRouter();

  const NavigateToProduct = () => {
    router.navigate("productDetail");
  };

  return (
    <TouchableOpacity onPress={NavigateToProduct}>
      <ImageBackground
        source={require("@/assets/images/lenovoLaptop.jpg")}
        resizeMode="cover"
        style={styles.child}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.text}>HP Laptops</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  child: {
    width,
    justifyContent: "center",
    height: "100%",
    overflow: "hidden",
    borderRadius: 24,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginRight: 38,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  exploreButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  exploreText: {
    color: "black", 
  },
});

export default ThirdSwiperCard;
