import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  MonthCarouselSelector,
  AppModal,
  MonthYearPicker,
  BottomActionButtons,
} from "../ui";
import colors from "@/config/colors";

type Props = {
  onChange: (date: Date) => void;
  value: Date;
};

export function JournalEntriesDateSelector({ onChange, value }: Props) {
  const [showSelector, setShowSelector] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date(value));

  const handleCancelPicker = () => {
    setPickerDate(value);
    setShowSelector(false);
  };
  const handleSavePicker = () => {
    onChange(pickerDate);
    setShowSelector(false);
  };
  const handleChange = (date: Date) => {
    onChange(date);
    setPickerDate(date);
  };
  const handleToggle = () => {
    setShowSelector((prev) => !prev);
  };
  return (
    <>
      <MonthCarouselSelector
        onChange={handleChange}
        onToggle={handleToggle}
        open={showSelector}
        value={value}
      />
      <AppModal visible={showSelector}>
        <View style={styles.pickerContainer}>
          <MonthYearPicker onChange={setPickerDate} value={pickerDate} />
          <BottomActionButtons
            onCancelPress={handleCancelPicker}
            onSavePress={handleSavePicker}
            saveText="Select"
          />
        </View>
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingBottom: 12,
    alignItems: "center",
  },
});
