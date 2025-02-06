import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "@/components/ui";
import colors from "@/config/colors";

export function NoEntries() {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>There are no entries for this date</AppText>
      <AppText style={styles.text}>
        Tap the button above to add a new entry
      </AppText>
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
  },
});
