import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonProps = {
  title: string;
  style ? : StyleProp<ViewStyle>
} & TouchableOpacityProps;
export const Button = ({ title,style, ...classes }: ButtonProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={[styles.button,style]} {...classes}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
  
    backgroundColor: "#353C4C",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width:"100%",

  },
  buttonText: { fontSize: 14, color: "white", fontWeight: 400 },
});
