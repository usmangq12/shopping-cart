import React from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { useRouter } from "expo-router";

export const Navbar = () => {
  const router = useRouter();

  const navigateToAccountDetail = () => {
    router.navigate("account");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          selectionColor="black"
          placeholder="Search"
          placeholderTextColor="#919191"
          style={styles.searchInput}
        />
        <EvilIcons name="search" size={26} color="black" style={styles.icon} />
      </View>
      <TouchableOpacity
        style={styles.walletButton}
        onPress={navigateToAccountDetail}
      >
        <TabBarIcon
          name="wallet-outline"  
          size={26}      
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    marginHorizontal: 8,
    marginTop: 28,
  },
  searchContainer: {
    paddingHorizontal: 14,
    borderRadius: 50,
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 4,
  },
  walletButton: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width:26,
    height:26,
    marginBottom:2,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Navbar;
