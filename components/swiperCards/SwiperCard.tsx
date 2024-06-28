import { Products } from "@/constants/Product";
import React from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { FirstSwiperCard } from "./FirstSwiperCard";
import { SecondSwiperCard } from "./SecondSwiperCard";
import { ThirdSwiperCard } from "./ThirdSwiperCard";

export const SwiperCard = () => (
  <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2}  >
     <FirstSwiperCard/>
     <SecondSwiperCard/>
     <ThirdSwiperCard/>
    </SwiperFlatList>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   marginHorizontal:12,

    overflow: "hidden",
    borderRadius: 24,
    maxHeight: 170,
  },

});
