import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { z } from "zod";
import { TextInputComponent } from "../../../common/TextInputComponent";
import { Button } from "@/common/Button";
import { Link, useRouter } from "expo-router";
import { Screens } from "@/constants/routes";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'






export const SignupPage = () => {
  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  // //   webClientId: 'YOUR CLIENT ID FROM GOOGLE CONSOLE',
  // })
  const schema = z.object({
    name: z
      .string()
      .min(
        2,
        "Product Name should be greater than 2 and less than 30 characters"
      )
      .max(
        30,
        "Product Name should be greater than 2 and less than 30 characters"
      ),
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
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });



  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    if (error) {
      console.error("Error signing in with Google:", error);
      alert("Error signing in with Google. Please try again.");
    }
    else {
      console.log("Data",data);
    }
  }

  const onSubmit = async (detail: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Name", detail.name, detail.email, detail.password);
    const { data, error } = await supabase.auth.signUp({
      email: detail.email,
      password: detail.password,
    });
    console.log("Data**",data);
    if (error) {
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again.");
    } else {
      alert("Sign Up Successful");
      console.log("Sign Up Successfully ", data);
    }

    router.navigate(Screens.Signin);
  };

  console.log("errros", errors.name);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 50 }}>
        <View
          style={{ gap: 8, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("@/assets/images/cart.png")}
            style={{
              width: 80,
              height: 80,
              overflow: "hidden",
              borderRadius: 50,
            }}
          />
          <Text style={{ fontSize: 24, fontWeight: 600 }}>
            Create an account
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 600, color: "#d0d0d0" }}>
            Let's get started with your 30 day free trial.
          </Text>
        </View>

        {/* Signup form */}

        <View style={styles.container}>
          <TextInputComponent
            name="name"
            title={"Name"}
            control={control}
            errors={errors.name}
          />

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
            <Button title="Create Account " onPress={handleSubmit(onSubmit)} />
          </View>
          {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
        
          try {
            await GoogleSignin.hasPlayServices();
        
            const userInfo = await GoogleSignin.signIn();
            console.log("Google Sign");
            console.log("Google signed",userInfo);

            if (userInfo.idToken) {
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.idToken,
              })
              router.navigate(Screens.Signin)
              console.log(error, data)
            } else {
              throw new Error('no ID token present!')
            }
          } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }

        }}
      /> */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
              padding: 4,
              borderColor: "#d3d2d8",
              borderWidth: 1,
              marginVertical: 10,
            }}
            onPress={signInWithGoogle}
          >
            <Image
              source={require("@/assets/images/google-logo.png")}
              style={{ width: 38, height: 38, borderRadius: 50 }}
            />
            <Text style={{ marginLeft: 12, fontSize: 16 }}>
              Sign up with Google
            </Text>
          </TouchableOpacity>


          <Text style={{ textAlign: "center" }}>
            Already Have an Account ? {""}
            <Link
              href={Screens.Signin}
              style={{ color: "#1a1aff", fontWeight: 600 }}
            >
              Log in
            </Link>
          </Text>
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
});




