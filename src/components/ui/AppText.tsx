import React, { type ReactNode } from "react";
import {
  type StyleProp,
  StyleSheet,
  Text,
  type TextProps,
  type TextStyle,
} from "react-native";
import colors from "@/config/colors";
import fonts from "@/config/fonts";

type Props = {
  accessibilityLabel?: string;
  children: ReactNode;
  fontWeight?: "400" | "500" | "600";
  fontSize?: 10 | 12 | 14 | 16 | 24;
  style?: StyleProp<Omit<TextStyle, "fontWeight" | "fontSize">>;
} & TextProps;

export function AppText({
  accessibilityLabel,
  children,
  fontSize = 14,
  fontWeight = "400",
  style,
  ...textProps
}: Props) {
  return (
    <Text
      {...textProps}
      accessibilityRole="text"
      style={[styles.base, styles[fontWeight], { fontSize }, style]}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.black,
    flexShrink: 1,
  },
  400: {
    fontFamily: fonts.PoppinsRegular,
  },
  500: {
    fontFamily: fonts.PoppinsMedium,
  },
  600: {
    fontFamily: fonts.PoppinsSemiBold,
  },
});
