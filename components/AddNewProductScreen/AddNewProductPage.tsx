import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/common/Button";
import { Input } from "./Input";
import CheckBox from "react-native-check-box";
import { Switch } from "react-native-switch";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const checkBoxOptions = [
  { label: "SM", value: "sm" },
  { label: "MD", value: "md" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
];

export const AddNewProductPage = () => {
  const schema = z.object({
    productName: z
      .string()
      .min(
        2,
        "Product Name should be greater than 2 and less than 30 characters"
      )
      .max(
        30,
        "Product Name should be greater than 2 and less than 30 characters"
      ),
    price: z.string().min(1, "Price should not be zero"),
    discount: z.string().nullable(),
    discountedPrice: z.string().refine((val) => val.length <= 255, {
      message: "String can't be more than 255 characters",
    }),
    description: z
      .string()
      .min(3, "Description should be greater than 3 characters"),
    productType: z.string().min(1, "Please select a Product Type"),
    productMerk: z.string().min(1, "Please select a Product Merk"),
    checkboxes: z.array(z.string()).min(1, "Please select at least one option"),
    inStock: z.boolean(),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      price: "",
      discount: "",
      discountedPrice: "",
      description: "",
      productType: "",
      productMerk: "",
      checkboxes: [],
      inStock: false,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center" }}
      showsVerticalScrollIndicator={false}
    >
      <Input
        name="productName"
        title={"Product Name"}
        control={control}
        errors={errors.productName}
        type="input"
      />
      <Input
        name="productType"
        title={"Product Type"}
        control={control}
        errors={errors.productType}
        type="dropdown"
      />
      <Input
        name="productMerk"
        title={"Product Merk"}
        control={control}
        errors={errors.productMerk}
        type="dropdown"
      />
      <Input
        name="price"
        title={"Price"}
        control={control}
        errors={errors.price}
        type="input"
      />
      <Input
        name="discount"
        title={"Discount"}
        control={control}
        errors={errors.discount}
        type="input"
      />
      <Input
        name="discountedPrice"
        title={"Discounted Price"}
        control={control}
        errors={errors.discountedPrice}
        type="input"
      />
      <Input
        name="description"
        title={"Product Description"}
        control={control}
        errors={errors.description}
        type="input"
      />
      <Text style={styles.label}>Product Size </Text>
      <Controller
        name="checkboxes"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            {checkBoxOptions.map((option) => (
              <CheckBox
                key={option.value}
                style={styles.checkbox}
                onClick={() => {
                  const newValue = value.includes(option.value)
                    ? value.filter((val) => val !== option.value)
                    : [...value, option.value];
                  onChange(newValue);
                }}
                isChecked={value.includes(option.value)}
                rightText={option.label}
              />
            ))}
          </View>
        )}
      />

      {errors.checkboxes && (
        <Text style={{ color: "red", marginTop: 12 }}>
          {errors.checkboxes.message}
        </Text>
      )}

      <Text style={styles.label}>In Stock </Text>
      <Controller
        name="inStock"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={{ paddingHorizontal: 12 }}>
            <Switch value={value} onValueChange={onChange} switchLeftPx={12} />
          </View>
        )}
      />

      <View style={{ marginVertical: 24 }}>
        <Button title="Add" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight:"700",
    color: "black",
    marginVertical: 12,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "white",
  },
  input: {
    borderRadius: 6,
    padding: 6,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#d3d2d8",
    shadowColor: "#ecebf2",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    marginVertical: 12,
  },
  checkbox: {
    marginVertical: 6,
  },
});
