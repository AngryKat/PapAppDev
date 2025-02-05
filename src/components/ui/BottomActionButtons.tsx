import React from "react";
import { StyleSheet, View } from "react-native";
import { AppButton } from "./AppButton";
import colors from "@/config/colors";

type Props = {
  cancelText?: string;
  saveText?: string;
  onCancelPress: () => void;
  onSavePress: () => void;
};

export function BottomActionButtons({
  cancelText = "Cancel",
  saveText = "Save",
  onCancelPress,
  onSavePress,
}: Props) {
  return (
    <View style={styles.container}>
      <AppButton
        small
        variant="outlined"
        textStyle={styles.cancelButtonText}
        containerStyle={styles.cancelButtonContainer}
        onPress={onCancelPress}
      >
        {cancelText}
      </AppButton>
      <AppButton small variant="outlined" onPress={onSavePress}>
        {saveText}
      </AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  cancelButtonContainer: {
    borderColor: colors.greyMiddle,
  },
  cancelButtonText: {
    color: colors.greyMiddle,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 16,
    gap: 16,
    justifyContent: "center",
  },
});
