import { Button } from "@/common/Button";
import { TextInputComponent } from "@/common/TextInputComponent";
import { Screens } from "@/constants/routes";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { z } from "zod";

export const SigninPage = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password should be at least 8 characters long"),
  });

  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (detail: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: detail.email,
        password: detail.password,
      })
    if (error) {
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again.");
    } else {
      alert("Sign Up Successful");
      console.log("Sign Up Successfully ", data);
    }

    router.navigate(Screens.Home);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 50 }}>
        <View
          style={{ gap: 8, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("@/assets/images/cart.png")}
            style={styles.heading}
          />
          <Text style={{ fontSize: 24, fontWeight: 600 }}>Welcome Back</Text>
          <Text style={{ fontSize: 14, fontWeight: 600, color: "#d0d0d0" }}>
            Welcome back! Please enter your detail
          </Text>
        </View>

        {/* Signup form */}

        <View style={styles.container}>
          <TextInputComponent
            name="email"
            title={"Email"}
            control={control}
            errors={errors.email}
          />

          <TextInputComponent
            name="password"
            title={"Password"}
            control={control}
            errors={errors.password}
          />

          <View style={{ marginTop: 32 }}>
            <Button title=" Login  " onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "700",
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
    padding: 8,
    marginTop: 24,
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
  heading: {
    width: 80,
    height: 80,
    overflow: "hidden",
    borderRadius: 50,
  },
});
