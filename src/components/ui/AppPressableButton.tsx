import React from "react";
import { type PressableProps, Pressable } from "react-native";

type Props = PressableProps;

export function AppPressableButton({ children, ...props }: Props) {
  return (
    <Pressable {...props} accessibilityRole="button">
      {children}
    </Pressable>
  );
}
