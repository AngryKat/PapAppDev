import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "@/components/ui";
import colors from "@/config/colors";

export function NoEntries() {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        Your journal is empty for this month...
      </AppText>
      <AppText style={styles.text}>Tap the button above to fix that!</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.greyMiddle,
    textAlign: "center",
  },
});
