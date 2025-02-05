import React from "react";
import { StyleSheet, View } from "react-native";
import { AppPressableButton } from "./AppPressableButton";
import colors from "@/config/colors";
import { ChevronIcon } from "@/components/icons";
import { DropdownButton } from "./DropdownButton";

type Props = {
  value: Date;
  onChange: (date: Date) => void;
  open: boolean;
  onToggle: () => void;
  showDay?: boolean;
};

export function MonthSliderSelector({
  onChange,
  open,
  onToggle,
  value,
  showDay = false,
}: Props) {
  const nextMonth = new Date(value);
  nextMonth.setMonth(value.getMonth() + 1);

  const previousMonth = new Date(value);
  previousMonth.setMonth(value.getMonth() - 1);

  const dropdownTitle = value.toLocaleString(
    "default",
    showDay
      ? {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      : {
          month: "short",
          year: "numeric",
        }
  );

  const handleNextMonth = () => {
    onChange(nextMonth);
  };

  const handlePrevMonth = () => {
    onChange(previousMonth);
  };

  return (
    <View style={styles.container}>
      <AppPressableButton
        onPress={handlePrevMonth}
        accessibilityLabel={`Select ${previousMonth.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}`}
        style={[
          styles.button,
          { marginBottom: -16 },
          {
            transform: [{ rotateY: "180deg" }],
          },
        ]}
      >
        <ChevronIcon size={14} color={colors.black} />
      </AppPressableButton>
      <DropdownButton
        variant="text"
        onPress={onToggle}
        title={dropdownTitle}
        open={open}
        accessibilityLabel="Toggle month and year picker selector"
      />

      <AppPressableButton
        style={[styles.button, { marginBottom: -10 }]}
        onPress={handleNextMonth}
        accessibilityLabel={`Select ${nextMonth.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}`}
      >
        <ChevronIcon size={14} color={colors.black} />
      </AppPressableButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 24,
    height: 24,
  },
});
