import { Navbar } from "@/components/HomeScreen/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { SwiperCard } from "@/components/swiperCards/SwiperCard";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
       
      <View
        style={{
          marginHorizontal: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 12,
        }}
      >
        
        <Text style={{ color: "black", fontWeight: 500 }}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={{ color: "#333", fontWeight: 300 }}>see all</Text>
        </TouchableOpacity>
      </View>
    
     <SwiperCard />
    
    <View style={{flex:1}}>
    <ProductCard />
    </View>
    
    </SafeAreaView>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: "white" },
};
export default HomeScreen;
