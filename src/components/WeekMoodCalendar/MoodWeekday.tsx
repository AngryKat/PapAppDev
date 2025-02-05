import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../ui";
import { Mood } from "@/config/types";
import colors from "@/config/colors";
import { moodItems } from "@/helpers/moods";

const daysOfWeek = {
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
} as const;

const renderMood = (isToday: boolean, mood?: Mood) => {
  if (!mood) {
    return (
      <View
        style={[styles.moodContainer, isToday && styles.todayMoodContainer]}
      >
        <View style={styles.missedCheckInDay} />
      </View>
    );
  }

  const { Icon } = moodItems[mood];

  return (
    <View style={[styles.moodContainer, isToday && styles.todayMoodContainer]}>
      <Icon size={20} />
    </View>
  );
};

type Props = {
  isToday?: boolean;
  day: number;
  mood?: Mood;
};

export function MoodWeekday({ day, isToday = false, mood }: Props) {
  const dayOfWeek = Object.keys(daysOfWeek)[day];
  const { label } = mood ? moodItems[mood] : { label: "" };

  return (
    <View
      style={[styles.dayContainer]}
      accessibilityLabel={`${isToday ? "today" : day}, ${label}`}
      accessible
    >
      {renderMood(isToday, mood)}
      <AppText
        fontSize={12}
        fontWeight="500"
        style={[
          styles.text,
          {
            color: isToday ? colors.primary : colors.greyMiddle,
          },
        ]}
      >
        {dayOfWeek}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    alignItems: "center",
  },
  missedCheckInDay: { width: 20, height: 20 },
  moodContainer: {
    backgroundColor: colors.light,
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 5,
  },
  moodsListContainer: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 9,
    paddingTop: 24,
  },
  todayMoodContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    paddingTop: 4,
  },
});
