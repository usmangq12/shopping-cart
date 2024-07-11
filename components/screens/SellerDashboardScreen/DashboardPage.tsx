import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Navbar from "../HomeScreen/Navbar";
import { SellerProductsGrid } from "./SellerProductsGrid";

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => {
  return (
    <Text style={styles.itemText}>{title}</Text>
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
    <View style={styles.container}>
      <Navbar showAccount={false} />
      <View>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <SellerProductsGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  itemText: {
    width: 100,
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "600",
    padding: 6,
    marginHorizontal: 4,
    textAlign: "center",
    borderRadius: 8,
  },
});
