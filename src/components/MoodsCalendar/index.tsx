import React, { useState } from "react";
import { View } from "react-native";
import { Calendar, type CalendarProps } from "react-native-calendars";
import { DayComponent } from "./DayComponent";
import { BaseCard } from "../ui";
import colors from "@/config/colors";
import { CalendarHeader } from "./CalendarHeader";

type Props = {};

const calendarConfigs: CalendarProps = {
  hideArrows: true,
  hideExtraDays: true,
  firstDay: 1, // monday
};

export function MoodsCalendar({}: Props) {
  const maxDate = new Date();
  const [currentDate, setCurrentMonth] = useState(maxDate);
  return (
    <BaseCard withShadow>
      <View
        style={{
          position: "relative",
          zIndex: -1,
        }}
      >
        <CalendarHeader currentDate={currentDate} onSave={setCurrentMonth} />
        <Calendar
          {...calendarConfigs}
          key={currentDate + ""} // force rerender
          current={currentDate.toISOString().split("T")[0]}
          customHeaderTitle={<></>}
          theme={{
            textSectionTitleColor: colors.greyDark,
            textDayHeaderFontWeight: "500",
            textDayHeaderFontFamily: "PoppinsMedium",
            textDayHeaderFontSize: 12,
          }}
          dayComponent={DayComponent}
        />
      </View>
    </BaseCard>
  );
}
