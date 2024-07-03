import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  GestureResponderEvent,
} from "react-native";

import { useRouter } from "expo-router";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import { z } from "zod";

import { CommonButton } from "@/common/Button";
import { TabBarIcon } from "./navigation/TabBarIcon";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ \\-]*)|(\([0-9]{2,3}\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = z.object({
  firstName: z
    .string()
    .min(3, "Name must be between 3 to 20 characters")
    .max(20, "Name must be between 3 to 20 characters"),
  streetAddress: z.string().min(1, { message: "Street address is required" }),
  phoneNumber: z.string().regex(phoneRegExp, "Invalid Number!"),
  email: z.string().email({ message: "Invalid email address" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const ShippingDetailsForm = () => {
  const router = useRouter();

  const goBackNavigation = () => {
    router.back();
  };

  const handleSubmit = (
    values: ValidationSchema,
    { resetForm }: FormikHelpers<ValidationSchema>
  ) => {
    console.log("Form Submitted ", values);
    resetForm();
    console.log("Hi");
    router.navigate("orderConfirm");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={goBackNavigation}>
            <TabBarIcon
              name="arrow-back-outline"
              size={20}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <View style={styles.shippingDetailsContainer}>
        <Text style={styles.shippingDetailsText}>Shipping Details</Text>
      </View>

      <Formik
        initialValues={{
          firstName: "",
          streetAddress: "",
          phoneNumber: "",
          email: "",
        }}
        validate={(values: ValidationSchema) => {
          try {
            validationSchema.parse(values);
          } catch (error) {
            const errors: FormikErrors<ValidationSchema> = {};
            if (error instanceof z.ZodError) {
              error.errors.forEach((err) => {
                if (err.path && err.path[0]) {
                  errors[err.path[0] as keyof ValidationSchema] = err.message;
                }
              });
            }
            return errors;
          }
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputsContainer}>
              <TextInput
                placeholder="First Name"
                style={styles.inputContainer}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                onChangeText={handleChange("firstName")}
              />
              {touched.firstName && errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}

              <TextInput
                placeholder="Street Address"
                style={styles.inputContainer}
                onBlur={handleBlur("streetAddress")}
                value={values.streetAddress}
                onChangeText={handleChange("streetAddress")}
              />
              {touched.streetAddress && errors.streetAddress && (
                <Text style={styles.errorText}>{errors.streetAddress}</Text>
              )}

              <TextInput
                placeholder="Phone Number"
                style={styles.inputContainer}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                onChangeText={handleChange("phoneNumber")}
                keyboardType="phone-pad"
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}

              <TextInput
                placeholder="Email"
                style={styles.inputContainer}
                onBlur={handleBlur("email")}
                value={values.email}
                onChangeText={handleChange("email")}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <CommonButton
                title="Confirm Order"
                onPress={()=>handleSubmit()}
               
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backIconContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  icon: {
    marginBottom: 1,
  },
  headerText: {
    color: "black",
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
  },
  shippingDetailsContainer: {
    gap: 4,
    marginTop: 24,
  },
  shippingDetailsText: {
    fontWeight: "500",
    fontSize: 16,
  },
  formContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputsContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    borderRadius: 6,
    padding: 4,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#d3d2d8",
    shadowColor: "#ecebf2",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    marginVertical: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
});

