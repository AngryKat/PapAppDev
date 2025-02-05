import React, { type ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "@/config/colors";

type Props = {
  centered?: boolean;
  children: ReactNode;
  level?: "1" | "2" | "3" | "4";
};

export function Heading({ centered, children, level = "1" }: Props) {
  return (
    <Text style={[styles[`h${level}`], centered && styles.centered]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  centered: {
    textAlign: "center",
  },
  h1: {
    color: colors.darkblue,
    fontFamily: "PoppinsMedium",
    fontSize: 24,
  },
  h2: {
    fontFamily: "PoppinsMedium",
    fontSize: 16,
  },
  h3: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
  },
  h4: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
  },
});
