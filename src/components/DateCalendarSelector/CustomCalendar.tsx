import React from "react";
import { StyleSheet } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { DayProps } from "react-native-calendars/src/calendar/day";
import { DayComponent } from "./DayComponent";

type Props = {
  value: Date;
  onChange: (date: Date) => void;
};

export function CustomCalendar({ onChange, value }: Props) {
  const formattedSelectedDate = value.toISOString().split("T")[0];

  return (
    <Calendar
      style={styles.container}
      hideArrows
      customHeaderTitle={<></>}
      onMonthChange={(date: DateData) => {
        onChange(new Date(date.dateString));
      }}
      key={value + ""}
      current={formattedSelectedDate}
      firstDay={1}
      dayComponent={(
        dayProps: DayProps & {
          date: DateData;
        }
      ) => {
        const date = new Date(dayProps.date.dateString);
        return (
          <DayComponent
            {...dayProps}
            onPress={() => {
              onChange(date);
            }}
            isCurrentMonth={date.getMonth() === value.getMonth()}
            isSelected={dayProps.date.dateString === formattedSelectedDate}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
