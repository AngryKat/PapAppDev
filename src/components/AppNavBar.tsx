import React from "react";
import { StyleSheet, View } from "react-native";
import { type NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Heading } from "./ui";
import colors from "@/config/colors";
import { NavBackButton } from "./NavBackButton";
import { Href } from "expo-router";

type Props = NativeStackHeaderProps;

export function AppNavBar({ back, options }: Props) {
  return (
    <View style={styles.container}>
      {!!back && <NavBackButton />}
      <Heading>{options.title}</Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 8,
  },
});
