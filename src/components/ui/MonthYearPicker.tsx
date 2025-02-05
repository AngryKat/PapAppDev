import colors from "@/config/colors";
import { PickerIOS } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, View } from "react-native";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const numberOfYearsOptions = 1001;
const today = new Date();
const yearsOptions = Array.from(
  { length: numberOfYearsOptions },
  (_, index) =>
    today.getFullYear() - Math.floor(numberOfYearsOptions / 2) + index
);

type Props = {
  onChange: (date: Date) => void;
  value: Date;
};

export function MonthYearPicker({ onChange, value }: Props) {
  const selectedMonth = value.getMonth();
  const selectedYear = value.getFullYear();
  const handleSelectMonth = (month: number) => {
    const newDate = new Date(value);
    newDate.setMonth(month as number);
    onChange(newDate);
  };
  const handleSelectYear = (year: number) => {
    const newDate = new Date(value);
    newDate.setFullYear(year as number);
    onChange(newDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <PickerIOS
          style={{ flex: 1 }}
          itemStyle={styles.itemStyle}
          selectedValue={selectedMonth}
          onValueChange={(month) => handleSelectMonth(month as number)}
        >
          {[...months].map((month, index) => (
            <PickerIOS.Item value={index} label={month} key={month} />
          ))}
        </PickerIOS>
      </View>
      <View style={styles.row}>
        <PickerIOS
          style={{ flex: 1 }}
          itemStyle={styles.itemStyle}
          selectedValue={selectedYear}
          onValueChange={(year) => handleSelectYear(year as number)}
        >
          {yearsOptions.map((year) => (
            <PickerIOS.Item value={year} label={"" + year} key={year} />
          ))}
        </PickerIOS>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemStyle: {
    color: colors.primary,
  },
  row: { flex: 1, flexDirection: "row", alignItems: "center" },
});
