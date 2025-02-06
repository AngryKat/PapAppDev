import colors from "@/config/colors";
import React, { ReactNode, useState } from "react";

import {
  StyleProp,
  StyleSheet,
  TextInput,
  type TextStyle,
  View,
  type ViewStyle,
  type TextInputProps,
} from "react-native";

type Props = {
  container?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  Prepend?: ReactNode;
  error?: boolean;
};

export function AppTextInput({
  container,
  inputStyle,
  error = false,
  placeholder = "enter text",
  Prepend,
  ...textInputProps
}: Props & TextInputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        container,
        error && styles.error,
        focused && styles.focused,
      ]}
    >
      {Prepend}
      <TextInput
        {...textInputProps}
        style={[styles.input, inputStyle]}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.greyMiddle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  focused: {
    borderColor: colors.blue,
  },
  error: {
    borderColor: colors.red,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.greyLight,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    color: colors.black,
    fontFamily: "PoppinRegular",
    fontSize: 14,
  },
});
