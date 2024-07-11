import React from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { TabBarIcon } from "../../navigation/TabBarIcon";
import { Screens } from "@/constants/routes";
import { Button } from "@/common/Button";

type NavbarProps = {
  showAccount: boolean;
};
export const Navbar = ({ showAccount }: NavbarProps) => {
  const router = useRouter();

  const navigateToAccountDetail = () => {
      if(showAccount) {
        router.navigate(Screens.AddtoWishList);
      }
      else {
        router.navigate(Screens.AddNewProduct);
      }
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
      {showAccount ? (
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
      ) : (
        <Button
          title="Add a New Product"
          onPress={navigateToAccountDetail}
          style ={{marginHorizontal:12, width:"auto"}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    marginHorizontal: 8,
    marginTop: 28,
    justifyContent: "center",
   
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
    width: 26,
    height: 26,
    marginBottom: 2,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Navbar;
