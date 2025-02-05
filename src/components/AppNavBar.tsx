import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { type NativeStackHeaderProps } from "@react-navigation/native-stack";
import { AppText, Heading } from "./ui";
import colors from "@/config/colors";
import { NavBackButton } from "./NavBackButton";
import { Href } from "expo-router";

type Props = NativeStackHeaderProps;

export function AppNavBar({ back, options }: Props) {
  return (
    <View style={styles.container}>
      {back?.href && <NavBackButton href={back.href as Href} />}
      <Heading>{options.title}</Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 24,
  },
});
