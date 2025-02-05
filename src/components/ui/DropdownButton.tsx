import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ChevronIcon } from "../icons";
import { AppText } from "./AppText";
import colors from "@/config/colors";
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  accessibilityLabel?: string;
  disabled?: boolean;
  onPress: () => void;
  title: string;
  open: boolean;
  variant?: "text" | "default";
  openDirection?: "up" | "down";
};

export function DropdownButton({
  accessibilityLabel,
  onPress,
  title,
  open,
  variant = "default",
  disabled = false,
  openDirection = "down",
}: Props) {
  const initRotation = open ? 90 : 0;
  const rotation = useSharedValue(initRotation);

  const rotateStyle = useAnimatedStyle(() => {
    rotation.value = withTiming(open ? (openDirection === "up" ? -90 : 90) : 0);
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <Pressable
      disabled={disabled}
      style={[styles.wrapper, styles[`${variant}Container`]]}
      onPress={onPress}
      accessibilityHint={accessibilityLabel || "Toggle multiselect"}
      accessibilityState={{ expanded: open }}
      accessibilityRole="togglebutton"
    >
      <AppText style={styles[`${variant}Text`]} fontWeight="600" fontSize={12}>
        {title}
      </AppText>
      <Animated.View style={[rotateStyle]}>
        <ChevronIcon
          size={12}
          color={colors[variant === "default" ? "primary" : "grey"]}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 18,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  defaultContainer: {
    backgroundColor: colors.blueLight,
  },
  textContainer: {
    backgroundColor: "transparent",
  },
  defaultText: {
    color: colors.primary,
    paddingRight: 12,
  },
  textText: {
    color: colors.grey,
    paddingRight: 12,
  },
});
