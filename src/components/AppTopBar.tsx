import colors from "@/config/colors";
import { Image } from "expo-image";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

type Props = {};

export function AppTopBar({}: Props) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          alt="App logo"
          source={require("../../assets/images/splash-icon.png")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingBottom: 24,
  },
  image: {
    width: 60,
    height: 40,
    objectFit: "contain",
  },
  wrapper: {
    backgroundColor: colors.yellow,
  },
});
