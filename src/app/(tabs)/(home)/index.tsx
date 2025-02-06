import { StyleSheet, ScrollView, View } from "react-native";
import { router } from "expo-router";

import { AppPressableButton, AppText, ScreenWrapper } from "@/components/ui";
import { CircledIcon } from "@/components/ui/CircledIcon";
import colors from "@/config/colors";
import { useState } from "react";
import { MoodEntry } from "@/config/types";
import { MoodsChart } from "@/components/MoodsChart";
import { PlusIcon } from "@/components/icons";
import { WeekMoodCalendar } from "@/components/WeekMoodCalendar";
import { MoodsCalendar } from "@/components/MoodsCalendar";

const numberOfDaysOfWeek = 7;

// get 7 date JS objects for each day of the week
// 0 - current week, 1 - last week etc.
function getWeekDates(step = 0) {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diffToMonday = (dayOfWeek + 6) % numberOfDaysOfWeek;
  const monday = new Date(today);
  monday.setDate(today.getDate() - diffToMonday);
  monday.setDate(monday.getDate() - step * numberOfDaysOfWeek);

  const weekDates = [];
  for (let i = 0; i < numberOfDaysOfWeek; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    weekDates.push(date);
  }
  return weekDates;
}

// get a date within a week in the past.
// 0 - current week, 1 - last week etc.
function getPastWeek(step = 0) {
  const today = new Date();
  const lastWeekDate = new Date(today);
  lastWeekDate.setDate(today.getDate() - numberOfDaysOfWeek * step);
  return lastWeekDate;
}

// create map to quickly retrieve mood
function groupDataByDate(data: MoodEntry[]) {
  return data.reduce((acc, obj) => {
    const dateKey =
      typeof obj.date === "string"
        ? obj.date
        : obj.date.toISOString().split("T")[0];
    acc[dateKey] = { ...obj, date: dateKey };
    return acc;
  }, {} as Record<string, MoodEntry>);
}

// get object with a selected week's dates as keys
const getInitial = (step = 0) =>
  getWeekDates(step).reduce((acc, curr) => {
    const [dateISO] = curr.toISOString().split("T");
    acc[dateISO] = null;
    return acc;
  }, {} as Record<string, MoodEntry | null>);

export default function HomeScreen() {
  // how many "steps" to make into the past. 0 steps - this week, 1 step - last week etc
  const [selectedWeekStep, setSelectedWeekStep] = useState("0");
  const [moods, setMoods] = useState<Record<string, MoodEntry | null>>(() =>
    getInitial(0)
  );
  const handleGoToMoodCheckIn = () => {
    router.navigate("/(tabs)/(home)/select-mood");
  };

  // const fetch = async (step: number) => {
  //   const date = getPastWeek(step);
  //   const moods = await fetchWeekMoods(auth.currentUser!.uid, date);
  //   if (moods)
  //     setMoods(() => ({
  //       ...getInitial(+selectedWeekStep),
  //       ...groupDataByDate(moods),
  //     }));
  // };
  // useFocusEffect(
  //   useCallback(() => {
  //     fetch(+selectedWeekStep);
  //   }, [selectedWeekStep])
  // );

  const handleWeekStepChange = (step: string) => {
    setSelectedWeekStep(step);
  };
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: -24,
        }}
      >
        <View style={styles.container}>
          <AppText fontSize={14} fontWeight="500">
            Check-in your emotion right now to keep track of your mood
          </AppText>
          <MoodsChart moods={moods} />
          <WeekMoodCalendar
            moods={moods}
            onWeekStepChange={handleWeekStepChange}
            weekStep={selectedWeekStep}
          />
          <MoodsCalendar />
          <AppPressableButton
            onPress={handleGoToMoodCheckIn}
            style={styles.checkInButton}
          >
            <CircledIcon
              size={64}
              IconComponent={<PlusIcon size={24} color={colors.white} />}
            />
            <AppText
              fontSize={14}
              fontWeight="500"
              style={{
                color: colors.primary,
                paddingTop: 8,
              }}
            >
              Check-In
            </AppText>
          </AppPressableButton>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
  },
  checkInButton: {
    alignSelf: "center",
  },
});
