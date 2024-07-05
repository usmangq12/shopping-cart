import React from "react";
import { View, Text, FlatList } from "react-native";
import Navbar from "../HomeScreen/Navbar";
import { SellerProductsGrid } from "./SellerProductsGrid";

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => {
  return (
    <View style={{ backgroundColor: "red", padding: 12, marginVertical: 12 }}>
      <Text style={{ backgroundColor: "black" }}>{title}</Text>
    </View>
  );
};

export const DashboardPage = () => {
  const DATA = [
    { id: "1", title: "HP" },
    { id: "2", title: "Lenovo" },
    { id: "3", title: "Dell" },
    { id: "4", title: "Asus" },
    { id: "5", title: "Acer" },
  ];

  return (
    <View style={{ flex: 1, gap: 12 }}>
      <Navbar showAccount={false} />
      <FlatList
        data={DATA}
        renderItem={({ item }) =>  <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <SellerProductsGrid />
    </View>
  );
};
