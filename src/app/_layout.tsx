import { AppTopBar } from "@/components/AppTopBar";
import colors from "@/config/colors";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../../assets/fonts/PoppinsRegular.ttf"),
    PoppinsMedium: require("../../assets/fonts/PoppinsMedium.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/PoppinsSemiBold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <MenuProvider>
        <Stack
          screenOptions={{
            header: AppTopBar,
            contentStyle: {
              backgroundColor: colors.lightLilac,
            },
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              title: "",
            }}
          />
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </MenuProvider>
    </ThemeProvider>
  );
}
