import React from "react";
import { Controller, FieldError, Merge } from "react-hook-form";
import { Text, TextInput, StyleSheet } from "react-native";

type TextInputProps = {
  control: any;
  name: string;
  title: string;
  errors: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};

export const TextInputComponent = ({
  control,
  name,
  title,
  errors,
}: TextInputProps) => {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value as string}
          />
        )}
        name={name}
        rules={{ required: true }}
      />

      {errors && errors !== undefined && (
        <Text style={styles.errorText}>{errors.message}</Text>
      )}
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
  errorText: { color: "red", padding: 2, marginTop: 4 },
});
