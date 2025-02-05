import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AppButton, MoodsSlider } from "./ui";
import { Mood } from "@/config/types";
import { router } from "expo-router";

type Props = {};

export function ThisWeekMoodCheckIn({}: Props) {
  const [selectedMood, setSelectedMood] = useState<Mood>("neutral"); // it just always starts off like this
  const handleMoodChange = (mood: Mood) => setSelectedMood(mood);
  const handleSelect = async () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <MoodsSlider onMoodChange={handleMoodChange} value={selectedMood} />
      <AppButton onPress={handleSelect}>Select</AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
});
