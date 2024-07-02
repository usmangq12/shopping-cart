import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type CommonButtonProps = {
  title: string;
} & TouchableOpacityProps;
export const CommonButton = ({ title, ...classes }: CommonButtonProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} {...classes}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "#353C4C",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonText: { fontSize: 14, color: "white", fontWeight: 400 },
});
