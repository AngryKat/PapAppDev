import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AppText,
  BottomActionButtons,
  DropdownButton,
  MonthYearPicker,
} from "../ui";
import colors from "@/config/colors";

type Props = {
  onSave: (date: Date) => void;
  onCancel: () => void;
  initialValue: Date;
};

export function CalendarMonthYearPicker({
  onCancel,
  onSave,
  initialValue,
}: Props) {
  const [pickerValue, setPickerValue] = useState(new Date(initialValue));
  const dropdownTitle = pickerValue.toLocaleString("default", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const handleOnSave = () => {
    onSave(pickerValue);
  };
  return (
    <>
      <DropdownButton
        onPress={() => {}}
        title={dropdownTitle}
        open
        variant="text"
      />
      <MonthYearPicker onChange={setPickerValue} value={pickerValue} />
      <BottomActionButtons
        onCancelPress={onCancel}
        onSavePress={handleOnSave}
        saveText="Accept"
      />
    </>
  );
}
