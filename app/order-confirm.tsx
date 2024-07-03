import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { CommonButton } from "@/common/Button";
export default function orderConfirm() {
  const router = useRouter();

  const goToHomeScreen = () => {
    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <FontAwesome5 name="check-circle" size={63} color="#353C4C" />
      <Text style={styles.orderConfirmText}>Order Confirmed!</Text>
      <Text style={{ textAlign: "center" }}>
        Your Order has been placed successfully{"\n"}
        Get delivery by <Text style={styles.dateText}>Sat, 06 July</Text> -{" "}
        <Text style={styles.dateText}>Mon, 08 July</Text>
      </Text>
      <CommonButton title="Continue Shopping " onPress={goToHomeScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 28,
  },
  orderConfirmText: { color: "black", fontSize: 24, fontWeight: "600" },
  dateText: { fontWeight: "500" },
});
