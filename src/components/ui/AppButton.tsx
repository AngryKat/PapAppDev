import React, { ReactNode } from "react";
import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  ButtonProps,
} from "react-native";

import colors from "@/config/colors";
import { applyOpacityToHex } from "@/utils";

import { AppPressableButton } from "./AppPressableButton";
import { AppText } from "./AppText";

type Props = {
  Append?: ReactNode;
  block?: boolean;
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
  small?: boolean;
  textStyle?: StyleProp<TextStyle>;
  variant?: "primary" | "secondary" | "outlined" | "text";
  withShadow?: boolean;
};

export function AppButton({
  Append,
  block = true,
  children,
  containerStyle,
  disabled = false,
  small = false,
  textStyle,
  variant = "primary",
  withShadow,
  ...buttonProps
}: Props & Omit<ButtonProps, "title">) {
  const buttonContainerStyle = [
    styles.container,
    block && styles.stretch,
    small ? styles.small : styles.defaultPadding,
    disabled
      ? styles.disabledContainer
      : (styles[
          `${variant}Container` as keyof typeof styles
        ] as StyleProp<ViewStyle>),
    containerStyle,
  ];
  const buttonTextStyle = [
    styles.text,
    disabled
      ? styles.disabledText
      : [
          styles[
            `${variant}Text` as keyof typeof styles
          ] as StyleProp<TextStyle>,
          textStyle,
        ],
  ];
  return (
    <AppPressableButton
      {...buttonProps}
      disabled={disabled}
      style={[...buttonContainerStyle, withShadow && styles.withShadow]}
    >
      <AppText
        fontSize={small ? 12 : 14}
        fontWeight="600"
        style={buttonTextStyle}
      >
        {children}
      </AppText>
      {Append}
    </AppPressableButton>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  stretch: {
    alignSelf: "stretch",
  },
  defaultPadding: {
    paddingVertical: 21,
    paddingHorizontal: 15,
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  text: {
    color: colors.primary,
  },
  disabledContainer: {
    backgroundColor: colors.greyMiddle,
  },
  disabledText: {
    color: colors.lightLilac,
  },
  outlinedContainer: {
    borderColor: colors.primary,
  },
  primaryContainer: {
    backgroundColor: colors.primary,
  },
  primaryText: {
    color: colors.white,
  },
  secondaryContainer: {
    backgroundColor: colors.blueLight,
  },
  secondaryText: {
    color: colors.primary,
  },
  withShadow: {
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowColor: applyOpacityToHex(colors.primary, 25),
  },
});
