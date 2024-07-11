import React from "react";
import { Control, Controller } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "react-native-check-box";
import { ProductType } from "./AddNewProductPage";

type CheckboxProps = {
  control: Control<ProductType>;
  name: "sizes";
  title: string;
  data: { label: string; value: string }[];
};

export const CheckboxComponent = ({
  control,
  name,
  title,
  data,
}: CheckboxProps) => {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            {data.map((option) => (
              <CheckBox
                key={option.value}
                style={styles.checkbox}
                onClick={() => {
                  const newValue = (
                    value as { label: string; value: string }[]
                  ).includes(option.value as any)
                    ? (value as { label: string; value: string }[]).filter(
                        (val) => val !== (option.value as any)
                      )
                    : [
                        ...(value as { label: string; value: string }[]),
                        option.value,
                      ];
                  onChange(newValue);
                }}
                isChecked={(
                  value as { label: string; value: string }[]
                ).includes(option.value as any)}
                rightText={option.label}
              />
            ))}
          </View>
        )}
        name={name}
        rules={{ required: true }}
      />
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
  checkbox: {
    marginVertical: 6,
  },
  errorText: {
    color: "red",
    padding: 2,
  },
});
