import colors from "@/config/colors";
import React from "react";
import { StyleSheet, Switch, View } from "react-native";

type Props = {
  onChange: (value: boolean) => void;
  value: boolean;
};

export function AppSwitch({ onChange, value }: Props) {
  return (
    <Switch
      trackColor={{ false: colors.greyLight, true: colors.primary }}
      ios_backgroundColor={colors.greyLight}
      onValueChange={onChange}
      value={value}
    />
  );
}
