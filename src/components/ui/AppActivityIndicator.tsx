import colors from "@/config/colors";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {};

export function AppActivityIndicator({}: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 16,
    opacity: 0.8,
    padding: 48,
  },
});
