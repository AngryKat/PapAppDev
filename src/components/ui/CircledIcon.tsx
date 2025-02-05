import React, { ReactNode } from "react";
import { type ColorValue, StyleSheet, View } from "react-native";

import colors from "@/config/colors";

type Props = {
  backgroundColor?: ColorValue;
  IconComponent: ReactNode;
  size?: number;
};

const padding = 10;

export function CircledIcon({
  backgroundColor = colors.primary,
  IconComponent,
  size = 20,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderRadius: (padding + size) / 2,
          height: size,
          width: size,
        },
      ]}
    >
      {IconComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding,
  },
});
