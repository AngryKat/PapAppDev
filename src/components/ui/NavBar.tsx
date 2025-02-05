import React, { ComponentProps, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import colors from "@/config/colors";
import { Heading } from "./Heading";

type Props = {
  Append?: ReactNode;
  headingLevel?: ComponentProps<typeof Heading>["level"];
  Prepend?: ReactNode;
  title: string;
};

export function NavBar({ Append, headingLevel = "1", Prepend, title }: Props) {
  return (
    <View style={styles.container}>
      {Prepend}
      <Heading level={headingLevel}>{title}</Heading>
      <View style={styles.headerRight}>{Append}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  headerRight: {
    marginLeft: "auto",
  },
});
