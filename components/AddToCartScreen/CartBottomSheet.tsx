import React, { forwardRef, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Button } from "@/common/Button";
import { useRouter } from "expo-router";
import { Screens } from "@/constants/routes";
import useProductsStore from "@/store/ProductsStore";

export const CartBottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const router = useRouter();
  const products = useProductsStore((state) => state.products);
  const snapPoints = useMemo(() => ["35%"], []);

  const { dismiss } = useBottomSheetModal();

  const goToCheckoutPage = () => {
    router.navigate(Screens.Checkout);
    dismiss();
  };

  const subTotal = useMemo(() => {
    return products
      .filter((product) => product.addToCart)
      .reduce(
        (total, product) =>
          total + Number(product.price.replace("$", "")) * product.quantity,
        0
      );
  }, [products]);

  return (
    <BottomSheetModal
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.background}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
    >
      <View style={styles.mainContainer}>
        <View style={styles.subTotalContainer}>
          <View style={styles.row}>
            <Text style={styles.subTotalText}>Sub-Total</Text>
            <Text style={styles.text}>${subTotal}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subTotalText}>Sub-Total</Text>
            <Text style={styles.text}>$100</Text>
          </View>
        </View>
        <View style={styles.totalCostContainer}>
          <Text style={styles.text}>Total Cost</Text>
          <Text style={styles.text}>${subTotal + 100}</Text>
        </View>
      </View>
      <Button title={"Proceed To Checkout"} onPress={goToCheckoutPage} />
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  handleIndicator: {
    backgroundColor: "#d3d2d8",
    width: 50,
  },
  background: {
    borderRadius: 0,
  },
  mainContainer: {
    padding: 12,
  },
  subTotalContainer: {
    gap: 6,
    borderBottomColor: "#d3d2d8",
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTotalText: {
    color: "grey",
    fontSize: 16,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  totalCostContainer: {
    paddingVertical: 12,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
  },
});
