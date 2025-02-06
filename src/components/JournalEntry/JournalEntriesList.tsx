import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useFocusEffect } from "expo-router";
import { JournalEntryCard } from "./JournalEntryCard";
import { JournalEntry } from "@/config/types";
import { NoEntries } from "./NoEntries";

type Props = { selectedDate: Date };

const cardHeight = 200;
const cardMargin = 16;

export function JournalEntriesList({ selectedDate }: Props) {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // const getJournalEntries = async () => {
  //   try {
  //     const entries = await fetchEntriesByDate(
  //       "dq0TFIj4nh2980kC1zBT",
  //       selectedDate
  //     );
  //     if (entries) setEntries(entries);
  //   } catch (e) {
  //     console.error("Error fetching");
  //   }
  // };
  // useFocusEffect(
  //   useCallback(() => {
  //     getJournalEntries();
  //   }, [selectedDate])
  // );
  if (entries.length === 0) {
    return <NoEntries />;
  }

  const handleRemove = async () => {
    // await getJournalEntries();
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={entries}
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardHeight + cardMargin}
          snapToAlignment="start"
          decelerationRate="fast"
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <JournalEntryCard {...item} onRemove={handleRemove} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  listItem: {
    marginVertical: 8,
  },
  wrapper: {
    marginHorizontal: -24,
  },
});
