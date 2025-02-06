import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText } from "../ui";
import colors from "@/config/colors";

type Option = {
  label: string;
  value: string;
};

type Props = {
  onChange: (value: string) => void;
  value: string;
  options: Option[];
};

export function RadioSelector({ onChange, value, options }: Props) {
  const handleSelectOption = (optionValue: string) => {
    onChange(optionValue);
  };
  return (
    <View style={styles.container} accessibilityRole="radiogroup">
      {options.map((option) => {
        return (
          <Pressable
            key={option.value}
            accessibilityRole="radio"
            style={[
              styles.radioButton,
              option.value === value && styles.radioButtonSelected,
            ]}
            onPress={() => handleSelectOption(option.value)}
          >
            <AppText
              style={[
                styles.radioButtonText,
                option.value === value && styles.radioButtonTextSelected,
              ]}
            >
              {option.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 16,
  },
  radioButton: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.greyMiddle,
  },
  radioButtonSelected: {
    borderColor: colors.primary,
  },
  radioButtonText: {
    color: colors.greyMiddle,
  },
  radioButtonTextSelected: {
    color: colors.primary,
  },
});
