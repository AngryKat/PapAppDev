import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Heading,
  DropdownButton,
  MonthYearPicker,
  BottomActionButtons,
  AppModal,
} from "../ui";

type Props = {
  currentDate: Date;
  onSave: (value: Date) => void;
};

export function CalendarHeader({ currentDate, onSave }: Props) {
  const [pickerDate, setPickerDate] = useState(currentDate);
  const [showPicker, setShowPicker] = useState(false);

  const dropdownTitle = pickerDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const handleCancel = () => {
    setPickerDate(currentDate);
    setShowPicker(false);
  };
  const handleSave = () => {
    onSave(pickerDate);
    setShowPicker(false);
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Heading level="2">Calendar</Heading>
        <DropdownButton
          onPress={() => setShowPicker((prev) => !prev)}
          title={dropdownTitle}
          open={showPicker}
        />
      </View>
      <AppModal visible={showPicker}>
        <MonthYearPicker
          value={pickerDate}
          onChange={(newDate) => setPickerDate(newDate)}
        />
        <BottomActionButtons
          onCancelPress={handleCancel}
          onSavePress={handleSave}
        />
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rebeccapurple",
  },
});
