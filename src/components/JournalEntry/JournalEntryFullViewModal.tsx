import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  AppButton,
  AppModal,
  AppPressableButton,
  AppText,
  Heading,
} from "@/components/ui";
import colors from "@/config/colors";
import { PenIcon } from "../icons";

type Props = {
  content: string;
  dateTitle: string;
  onClose: () => void;
  onEdit: () => void;
  title: string;
  visible: boolean;
};

export function JournalEntryFullViewModal({
  content,
  dateTitle,
  onClose,
  onEdit,
  title,
  visible,
}: Props) {
  return (
    <AppModal
      contentStyle={styles.container}
      onRequestClose={onClose}
      visible={visible}
    >
      <View style={styles.topHeader}>
        <AppText fontSize={12} style={styles.dateTitle}>
          {dateTitle}
        </AppText>
        <AppPressableButton accessibilityLabel="Edit" onPress={onEdit}>
          <PenIcon size={20} color={colors.greyLight} />
        </AppPressableButton>
      </View>
      <Heading level="2" centered>
        {title}
      </Heading>
      <ScrollView style={styles.content}>
        <AppText>{content}</AppText>
      </ScrollView>
      <AppButton variant="text" onPress={onClose}>
        Close
      </AppButton>
    </AppModal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 500,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  dateTitle: {
    color: colors.greyMiddle,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
