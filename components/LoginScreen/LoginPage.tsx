import { Button } from "@/common/Button";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "react-native-check-box";
import { useRouter } from "expo-router";
export const LoginPage = () => {
  const [isSelected, setSelection] = useState(false);
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View>
        <CheckBox
          style={{ flex: 1, padding: 10, marginTop: 30 }}
          onClick={() => {
            setSelection(!isSelected);
          }}
          isChecked={isSelected}
          rightText={"Are You Seller ?"}
          rightTextStyle={{ color: "black" }}
        />
        <Button
          title={isSelected ? "Go To Dashboard" : "Home Page "}
          onPress={() =>
            isSelected ? router.navigate("dashboard") : router.navigate("home")
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: "center",
  },
  label: {
    marginLeft: 20,
  },
});
