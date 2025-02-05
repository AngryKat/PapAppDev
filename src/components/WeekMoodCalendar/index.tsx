import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import colors from "@/config/colors";
import { AppButton, AppText, BaseCard, Heading } from "../ui";
import { DropdownButton } from "../ui/DropdownButton";
import { MoodWeekday } from "./MoodWeekday";
import { MoodEntry } from "@/config/types";
import { router } from "expo-router";

function getPastWeekLabel(step: number | string) {
  if (step === 0 || step === "0") return "This week";
  if (step === 1 || step === "1") return "Last week";
  return `${step} weeks ago`;
}
const numberOfWeeklyRecords = 5;

export function WeekMoodCalendar({
  moods,
  onWeekStepChange,
  weekStep,
}: {
  moods: Record<string, MoodEntry | null>;
  onWeekStepChange: (step: string) => void;
  weekStep: string;
}) {
  const weekDates = Object.keys(moods);
  const [showOptions, setShowOptions] = useState(false);

  const weeklyStepsArray = useMemo(
    () => [...Array(numberOfWeeklyRecords).keys()],
    []
  );

  const handleToggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  return (
    <BaseCard withShadow>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Heading level="2">Your weekly mood</Heading>
        <Menu
          renderer={renderers.Popover}
          opened={showOptions}
          onBackdropPress={() => setShowOptions(false)}
        >
          <MenuTrigger>
            <DropdownButton
              onPress={handleToggleOptions}
              title={getPastWeekLabel(weekStep)}
              variant="text"
              open={showOptions}
              openDirection="up"
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                borderRadius: 12,
                padding: 12,
              },
              optionWrapper: {
                padding: 12,
              },
            }}
          >
            {weeklyStepsArray.map((step) => (
              <MenuOption
                key={step}
                value={"" + step}
                onSelect={() => {
                  setShowOptions(false);
                  onWeekStepChange("" + step);
                }}
              >
                <AppText>{getPastWeekLabel(step)}</AppText>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </View>
      <View style={styles.moodsListContainer}>
        {weekDates.map((date) => {
          const currentDate = new Date(date);
          const mood = moods[date];
          const isToday = date === new Date().toISOString().split("T")[0];
          return (
            <MoodWeekday
              mood={mood?.mood}
              key={currentDate.getDay()}
              day={currentDate.getDay()}
              isToday={isToday}
            />
          );
        })}
      </View>
      <AppButton
        containerStyle={{
          marginTop: 24,
          marginBottom: 12,
        }}
        small
        onPress={() => router.navigate("/(tabs)/(home)/select-mood")}
      >
        Check-in
      </AppButton>
    </BaseCard>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    alignItems: "center",
  },
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
    color: colors.greyMiddle,
    paddingTop: 4,
  },
});
