import React from "react";
import { Controller, FieldError, Merge } from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { Switch } from "react-native-switch";

type SwitchProps = {
  control: any; // Adjust type as needed
  name: string;
  title: string;
  errors: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};

export const SwitchComponent = ({
  control,
  name,
  title,
  errors,
}: SwitchProps) => {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={{ paddingHorizontal: 12 }}>
            <Switch
              value={value as boolean}
              onValueChange={onChange}
              switchLeftPx={12}
            />
          </View>
        )}
        name={name}
        rules={{ required: true }}
      />
     
     {errors && errors !== undefined && <Text style={styles.errorText}>{errors.message}</Text>}
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
  errorText : {color:"red",padding:2}
});
