import colors from "@/config/colors";
import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  accessibilityHint?: string;
  children: ReactNode;
  container?: StyleProp<ViewStyle>;
  withShadow?: boolean;
};

export function BaseCard({ children, container, withShadow = false }: Props) {
  return (
    <View
      style={[styles.container, container, withShadow && styles.withShadow]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  withShadow: {
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowColor: colors.lightLilac,
  },
});
