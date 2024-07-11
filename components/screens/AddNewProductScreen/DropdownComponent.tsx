import React from "react";
import { Controller, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type DropdownProps = {
  control: any; // Adjust type as needed
  name: string;
  title: string;
  data: { label: string; value: string }[];
  errors: Merge<FieldError, FieldError | FieldErrorsImpl<{ label: string; value: string }>> | undefined;
};

export const DropdownComponent = ({ control, name, title, data ,errors}: DropdownProps) => {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            style={styles.input}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            itemContainerStyle={{ padding: 0 }}
            itemTextStyle={{}}
            value={value as string}
            onChange={(item) => {
              onChange(item.value);
            }}
          />
        )}
        name={name}
        rules={{ required: true }}
      />
       {errors && <Text style={styles.errorText}>{errors.message}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    marginVertical: 12,
    marginLeft: 0,
    fontWeight: "700",
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
  errorText : {color:"red",padding:2}
});
