import { LinearGradient } from "expo-linear-gradient";
import React, { type ReactNode } from "react";
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  type ViewStyle,
} from "react-native";
import colors from "@/config/colors";

type Props = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

const padding = 24;

export function ScreenWrapper({ children, containerStyle }: Props) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient
        style={[containerStyle, styles.container]}
        colors={[colors.white, colors.light, colors.lightLilac]}
        locations={[0.2, 0.8, 1]}
      >
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightLilac,
  },
  container: {
    flex: 1,
    paddingHorizontal: padding,
  },
});
