import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/useColorScheme";
import { Screens } from "@/constants/routes";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={ DefaultTheme}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack>
            {/** Create enums for screens */}
            <Stack.Screen
              name={Screens.Index}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.ProductDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.OrderConfirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.AddToCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.AddtoWishList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.AddNewProduct}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name={Screens.Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
