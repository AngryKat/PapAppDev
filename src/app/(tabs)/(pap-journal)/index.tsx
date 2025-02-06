import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { JournalEntriesDateSelector } from "@/components/JournalEntry/JournalEntriesDateSelector";
import { JournalEntriesList } from "@/components/JournalEntry/JournalEntriesList";
import { AppButton, AppText, Heading, ScreenWrapper } from "@/components/ui";

export default function PapJournalScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleButtonPress = () => {
    router.navigate({
      pathname: "/(tabs)/(pap-journal)/journal-entry",
      params: {
        initialDate: JSON.stringify(selectedDate),
      },
    });
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <AppText fontSize={14} fontWeight="500">
          You can jot down your thoughts or reflect on your day
        </AppText>
        <AppButton onPress={handleButtonPress}>
          Add a new Journal Entry
        </AppButton>
        <Heading level="2">Journal history</Heading>
        <JournalEntriesDateSelector
          onChange={setSelectedDate}
          value={selectedDate}
        />
        <JournalEntriesList selectedDate={selectedDate} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
});
