import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { router } from "expo-router";

import {
  AppPressableButton,
  AppText,
  BaseCard,
  Heading,
} from "@/components/ui";
import colors from "@/config/colors";
import { JournalEntryFullViewModal } from "./JournalEntryFullViewModal";
import { JournalEntry } from "@/config/types";
import { PenIcon } from "../icons";

type Props = JournalEntry & { onRemove: () => void };

export function JournalEntryCard({
  id,
  title,
  content,
  date,
  onRemove,
}: Props) {
  const [showMore, setShowMore] = useState(false);
  const dateTitle = new Date(date).toLocaleString("default", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const [day, ...monthYear] = dateTitle.split(" ");

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handlePressEdit = async () => {
    setShowMore(false);
    router.navigate({
      pathname: "/(tabs)/(pap-journal)/journal-entry",
      params: { entryId: id },
    });
  };

  const handleRemove = () => {
    Alert.alert(
      "Delete entry?",
      `Are you sure you want to delete entry ${title}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          style: "destructive",
          text: "Delete",
          onPress: () => {
            onRemove();
          },
        },
      ]
    );
  };

  return (
    <>
      <BaseCard withShadow>
        <View style={styles.container}>
          <View style={styles.dateContainer} accessible>
            <AppText
              fontWeight="500"
              fontSize={24}
              style={styles.dateContainerDayText}
            >
              {day}
            </AppText>
            <AppText style={styles.dateContainerText}>
              {monthYear.join(" ")}
            </AppText>
          </View>
          <View style={styles.contentContainer}>
            <Heading level="3">{title}</Heading>
            <AppText
              fontSize={12}
              style={styles.contentContainerText}
              numberOfLines={6}
            >
              {content}
            </AppText>
          </View>
          <AppPressableButton
            accessibilityLabel="Edit"
            onPress={handlePressEdit}
          >
            <PenIcon size={20} color={colors.greyLight} />
          </AppPressableButton>
        </View>
        <View style={styles.actionButtonsContainer}>
          <AppPressableButton
            onPress={handleShowMore}
            style={styles.actionButton}
          >
            <AppText
              fontWeight="500"
              fontSize={12}
              style={styles.showMoreButtonText}
            >
              show more
            </AppText>
          </AppPressableButton>
          <AppPressableButton
            onPress={handleRemove}
            style={styles.actionButton}
          >
            <AppText
              fontWeight="500"
              fontSize={12}
              style={styles.deleteButtonText}
            >
              delete
            </AppText>
          </AppPressableButton>
        </View>
      </BaseCard>
      <JournalEntryFullViewModal
        content={content}
        dateTitle={dateTitle}
        title={title}
        visible={showMore}
        onClose={() => setShowMore(false)}
        onEdit={handlePressEdit}
      />
    </>
  );
}

const styles = StyleSheet.create({
  actionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  container: {
    paddingVertical: 6,
    flexDirection: "row",
    gap: 10,
    height: 200,
  },
  contentContainer: {
    flexBasis: 210,
    paddingRight: 8,
    gap: 8,
  },
  contentContainerText: { lineHeight: 16 },
  dateContainer: {
    alignItems: "center",
    flexShrink: 1,
  },
  dateContainerDayText: { color: colors.darkblue },
  dateContainerText: {
    textAlign: "center",
    color: colors.greyMiddle,
    lineHeight: 18,
  },
  actionButton: {
    marginTop: "auto",
    alignSelf: "flex-end",
    paddingRight: 10,
    paddingBottom: 10,
  },
  showMoreButtonText: { color: colors.blue },
  deleteButtonText: { color: colors.red },
});
