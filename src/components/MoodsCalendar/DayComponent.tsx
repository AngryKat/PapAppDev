import React from "react";
import { StyleSheet, View } from "react-native";
import { DateData } from "react-native-calendars";
import { DayProps } from "react-native-calendars/src/calendar/day";
import { moodItems } from "@/helpers/moods";
import colors from "@/config/colors";
import { AppText } from "../ui";

type Props = DayProps & {
  date?: DateData;
};

export function DayComponent({ accessibilityLabel, date, state }: Props) {
  const Icon = Object.values(moodItems)[Math.floor(Math.random() * 6)]?.Icon;
  const dayLabel = "" + date?.day;
  const isToday = state === "today";
  return (
    <View style={[styles.container, isToday && styles.today]} accessible>
      {Icon ? (
        <Icon size={24} accessible />
      ) : (
        <View
          style={{
            width: 24,
            height: 24,
          }}
        />
      )}
      <AppText
        accessibilityLabel={accessibilityLabel}
        fontSize={12}
        fontWeight="500"
        style={styles.text}
      >
        {dayLabel}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 54,
    minWidth: 32,
    paddingHorizontal: 4,
    paddingTop: 8,
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 12,
  },
  text: {
    color: colors.greyDark,
    paddingVertical: 2,
    lineHeight: 18,
  },
  today: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
