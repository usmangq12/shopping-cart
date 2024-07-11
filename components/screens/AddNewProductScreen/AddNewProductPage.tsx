import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import Constants from "expo-constants";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/common/Button";
import { supabase } from "@/lib/supabase";
import * as ImagePicker from "expo-image-picker";

import { TextInputComponent } from "../../../common/TextInputComponent";
import { CheckboxComponent } from "./CheckboxComponent";
import { SwitchComponent } from "./SwitchComponent";
import { DropdownComponent } from "./DropdownComponent";
import { router, useRouter } from "expo-router";

export type ProductType = {
  name: string;
  price: string | number;
  discount: string | number;
  discountedPrice: string | number;
  description: string;
  type: Array<{ label: string; value: string }>;
  merk: Array<{ label: string; value: string }>;
  sizes: Array<{ label: string; value: string }>;
  inStock: boolean;
  image: string;
};

const productType = [
  { label: "Electronics", value: "electronics" },
  { label: "Clothes", value: "clothes" },
  { label: "Shoes", value: "shoes" },
  { label: "Cosmetics", value: "cosmetics" },
  { label: "Grocery", value: "grocery" },
];
const productMerks = [
  { label: "Brand A", value: "brand_a" },
  { label: "Brand B", value: "brand_b" },
  { label: "Brand C", value: "brand_c" },
];

const checkBoxOptions = [
  { label: "SM", value: "sm" },
  { label: "MD", value: "md" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
];

export const AddNewProductPage = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("Products").select();
      if (error) {
        console.error("Error fetching products", error);
      } else {
        console.log("Supabase Data ", data);
      }
    };
    fetchProducts();

    const requestPermissions = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    };
    requestPermissions();
  }, []);

  const [image, setImage] = useState<string>("");

  const router = useRouter();
  const pickImage = async (onChange: (uri: string) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      onChange(uri);
    }
  };

  const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
  const ACCEPTED_FILE_TYPES = ["image/png"];

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
    price: z
      .string()
      .min(1, "Price should not be zero")
      .transform((arg) => Number(arg)),
    discount: z
      .string()
      .nullable()
      .transform((arg) => Number(arg)),
    discountedPrice: z
      .string()
      .refine((val) => val.length <= 255, {
        message: "String can't be more than 255 characters",
      })
      .transform((arg) => Number(arg)),
    description: z
      .string()
      .min(3, "Description should be greater than 3 characters"),
    type: z.string().min(1, "Please select a Product Type"),
    merk: z.string().min(1, "Please select a Product Merk"),
    sizes: z.array(z.string()),
    inStock: z.boolean(),
    image: z.string().url("Please select a Product Image"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductType>({
    defaultValues: {
      name: "",
      price: "",
      discount: "",
      discountedPrice: "",
      description: "",
      type: [],
      merk: [],
      sizes: [],
      inStock: false,
      image: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (datas: ProductType) => {
    const { data, } = await supabase.storage
      .from("assets")
      .upload("public/avatar1.png", image);
     if (data) {
      console.log("Image uploaded successfully", data);
     datas.image =   data.fullPath 
    }
    // Insert Query

    const { status, error } = await supabase.from("Products").insert(datas);
    if (error) {
      console.error("Error adding product ", error);
    } else {
      console.log("Product added successfully", status);
      router.navigate("/dashboard");
    }

    // Update Query
    // const { error,status } = await supabase
    // .from('products')
    // .update({ name: 'Grocery' })
    // .eq('id', 3)
    // if (error) {
    //   console.error("Error updating product ", error);
    // } else {
    //   console.log("Product updated successfully", status);
    // }

    // Delete Query
    // const response = await supabase.from("Products").delete().eq("id", 3);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center" }}
      showsVerticalScrollIndicator={false}
    >
      <TextInputComponent
        name="name"
        title={"Product Name"}
        control={control}
        errors={errors.name}
      />
      <DropdownComponent
        name="type"
        title={"Product Type"}
        control={control}
        errors={errors.type}
        data={productType}
      />
      <DropdownComponent
        name="merk"
        title={"Product Merk"}
        control={control}
        errors={errors.merk}
        data={productMerks}
      />

      <TextInputComponent
        name="price"
        title={"Price"}
        control={control}
        errors={errors.price}
      />

      <TextInputComponent
        name="discount"
        title={"Discount"}
        control={control}
        errors={errors.discount}
      />

      <TextInputComponent
        name="discountedPrice"
        title={"Discounted Price"}
        control={control}
        errors={errors.discountedPrice}
      />

      <TextInputComponent
        name="description"
        title={"Product Description"}
        control={control}
        errors={errors.description}
      />
      <View>
        <Text style={styles.label}>Product Image</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Button
                title="Pick Product Image"
                onPress={() => pickImage(onChange)}
                style={{ width: 150, height: 40, borderRadius: 4, padding: 2 }}
              />
              {value && <Image source={{ uri: value }} style={styles.image} />}
            </>
          )}
          name="image"
          rules={{ required: true }}
        />

        {errors.image && (
          <Text style={styles.errorText}>{errors.image.message}</Text>
        )}
      </View>

      <CheckboxComponent
        name="sizes"
        title={"Product Sizes"}
        control={control}
        data={checkBoxOptions}
      />

      <SwitchComponent
        name="inStock"
        title={"In Stock"}
        control={control}
        errors={errors.inStock}
      />

      <View style={{ marginVertical: 24 }}>
        <Button
          title="Add"
          onPress={handleSubmit(onSubmit)}
          style={{ marginBottom: 12 }}
        />
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
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
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
  image: {
    width: 200,
    height: 200,
    marginTop: 12,
    borderRadius: 16,
    overflow: "hidden",
  },
  errorText: { color: "red", padding: 2, marginTop: 4 },
});
