import React, { useState } from "react";
import { AppModal, BottomActionButtons, MonthCarouselSelector } from "../ui";
import { CustomCalendar } from "./CustomCalendar";
import { StyleSheet } from "react-native";
import { CalendarMonthYearPicker } from "./CalendarMonthYearPicker";

type Props = {
  onCancel: () => void;
  onSave: (date: Date) => void;
  initialValue: Date;
  visible: boolean;
};

export function CalendarModal({
  onCancel,
  onSave,
  initialValue,
  visible,
}: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialValue);
  const handleCancel = () => {
    if (showPicker) {
      setShowPicker(false);
      setSelectedDate(selectedDate);
      return;
    }
    onCancel();
  };

  const handleSave = () => {
    if (showPicker) {
      setShowPicker(false);
      return;
    }
    onSave(selectedDate);
  };

  return (
    <AppModal
      visible={visible}
      onRequestClose={onCancel}
      contentStyle={styles.container}
    >
      {showPicker ? (
        <CalendarMonthYearPicker
          onSave={(date: Date) => {
            setSelectedDate(date);
            setShowPicker(false);
          }}
          onCancel={() => {
            setShowPicker(false);
          }}
          initialValue={selectedDate}
        />
      ) : (
        <>
          <MonthCarouselSelector
            onChange={setSelectedDate}
            onToggle={() => setShowPicker((prev) => !prev)}
            open={showPicker}
            showDay
            value={selectedDate}
          />
          <CustomCalendar value={selectedDate} onChange={setSelectedDate} />
          <BottomActionButtons
            onCancelPress={handleCancel}
            onSavePress={handleSave}
            saveText="Save"
          />
        </>
      )}
    </AppModal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 380,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
