import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DropdownButton } from "../ui";
import { CalendarModal } from "./CalendarModal";

type Props = {
  onChange: (date: Date) => void;
  value: Date;
};

export function DateCalendarSelector({ onChange, value }: Props) {
  const title = value.toLocaleString("default", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <View style={styles.container}>
      <DropdownButton
        onPress={() => setShowCalendar(true)}
        title={title}
        open={showCalendar}
      />
      <CalendarModal
        initialValue={value}
        visible={showCalendar}
        onSave={(date: Date) => {
          onChange(date);
          setShowCalendar(false);
        }}
        onCancel={() => setShowCalendar(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
