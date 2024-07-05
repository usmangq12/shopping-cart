import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const productType = [
  { label: "Electronics", value: "electronics" },
  { label: "Clothes", value: "clothes" },
  { label: "Shoes", value: "shoes" },
  { label: "Cosmatics", value: "cosmatics" },
  { label: "Grocery", value: "grocery" },
];

export const Input = ({ control, errors, name, title, type }) => {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) =>
          type === "input" ? (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          ) : (
            <Dropdown
              style={styles.input}
              data={productType}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              itemContainerStyle={{ padding: 0 }}
              itemTextStyle={{}}
              value={value}
              onChange={(item) => {
                onChange(item.value);
              }}
            />
          )
        }
        name={name}
        rules={{ required: true }}
      />
      {errors && (
        <Text style={{ color: "red", marginTop: 12 }}>{errors.message}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    marginVertical: 12,
    marginLeft: 0,
    fontWeight:"700",
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
  },
});
