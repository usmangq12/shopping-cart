import { Products } from "@/constants/Product";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

export const FirstSwiperCard = () => {
  const router = useRouter();
  const NavigateToProduct = () => {
    router.navigate("productDetail");
  };
  {
    return (
      <TouchableOpacity style={styles.child} onPress={NavigateToProduct}>
        <View style={styles.imageBackground}>
          <View style={styles.saleContainer}>
            <Text
              style={styles.text}
            >{`Get Your Special \n Sale upto 10%`}</Text>
            <TouchableOpacity style={styles.shopNowButton}>
              <Text>shop now </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={Products[2].img}
            resizeMode="cover"
            style={styles.imageBackground}
          />
        </View>
      </TouchableOpacity>
    );
  }
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  child: {
    width,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 24,
    backgroundColor: "#DFC0AB",
  },
  imageBackground: {
    flex: 2,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    gap: 10,
  },
  saleContainer: {
    flex: 1,
    gap: 28,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  shopNowButton: {
    borderRadius: 50,
    backgroundColor: "white",
    padding: 8,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
