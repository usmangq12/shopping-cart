import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { CommonButton } from "@/common/Button";
export default function orderConfirm() {
  const router = useRouter();

  const goToHomeScreen = () => {
    router.navigate("/");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 28,
      }}
    >
      <FontAwesome5 name="check-circle" size={63} color="#353C4C" />
      <Text style={{ color: "black", fontSize: 24, fontWeight: "600" }}>
        Order Confirmed!
      </Text>
      <Text style={{ textAlign: "center" }}>
        Your Order has been placed successfully{"\n"}
        Get delivery by <Text style={{ fontWeight: 500 }}>
          Sat, 06 July
        </Text> - <Text style={{ fontWeight: 500 }}>Mon, 08 July</Text>
      </Text>
      <CommonButton title="Continue Shopping " onPress={goToHomeScreen} />
    </View>
  );
}

const styles = {
  container: { flex: 1, backgroundColor: "white" },
};
