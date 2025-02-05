import React from "react";
import { StyleSheet, View } from "react-native";
import { AppActivityIndicator } from "./AppActivityIndicator";

type Props = {};

export function SuccessOverlay({}: Props) {
  return (
    <View style={styles.container}>
      <AppActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    inset: 0,
    justifyContent: "center",
    position: "relative",
  },
});
