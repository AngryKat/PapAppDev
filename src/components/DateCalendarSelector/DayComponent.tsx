import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { DateData } from "react-native-calendars/src/types";
import { type DayProps } from "react-native-calendars/src/calendar/day";
import colors from "@/config/colors";
import { AppText } from "../ui";

// isToday={state === "today"}
// onPress={() => {
//   setSelectedDate(date);
// }}
// day={dateData.day}
// isCurrentMonth={date.getMonth() === selectedDate.getMonth()}
// isSelected={
//   dateData.dateString ===
//   selectedDate.toISOString().split("T")[0]
// }

type Props = DayProps & {
  date: DateData;
  isCurrentMonth: boolean;
  isSelected: boolean;
  onPress: () => void;
};

export function DayComponent({
  accessibilityLabel,
  date: dateData,
  isCurrentMonth,
  isSelected,
  onPress,
  state,
}: Props) {
  const isToday = state === "today";
  const day = dateData.day;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isSelected ? colors.primary : "transparent" },
      ]}
    >
      <AppText
        accessibilityLabel={accessibilityLabel}
        fontSize={12}
        fontWeight={isSelected || isToday ? "600" : "500"}
        style={[
          styles.text,
          isCurrentMonth && styles.currentMonthText,
          isToday && styles.todayText,
          isSelected && styles.selectedText,
        ]}
      >
        {day}
      </AppText>
      {isToday && (
        <View
          style={[styles.dot, isSelected && { backgroundColor: colors.white }]}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 24,
    justifyContent: "center",
    borderRadius: 6,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginHorizontal: "auto",
  },
  text: {
    color: colors.lightPeriwinkle,
    textAlign: "center",
  },
  selectedText: {
    color: colors.white,
  },
  todayText: {
    color: colors.primary,
  },
  currentMonthText: {
    color: colors.black,
  },
});
