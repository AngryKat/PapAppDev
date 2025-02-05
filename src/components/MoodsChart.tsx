import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import moods from "./icons/emojis";
import colors from "@/config/colors";
import { Heading } from "./ui";
import { LineChartProps } from "react-native-chart-kit/dist/line-chart/LineChart";
import { MoodEntry } from "@/config/types";

const moodsSorted = [
  moods.VeryHappyEmojiIcon,
  moods.HappyEmojiIcon,
  moods.NeutralEmojiIcon,
  moods.SadEmojiIcon,
  moods.VerySadEmojiIcon,
];

export const daysOfWeek = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
} as const;

const moodsChartValueMap = {
  very_sad: 1,
  sad: 2,
  neutral: 3,
  happy: 4,
  very_happy: 5,
} as const;

const padding = 18;
const minChartValue = 1;
const maxChartValue = 5;

const chartConfig = {
  propsForLabels: {
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },
  propsForBackgroundLines: {
    strokeDasharray: "",
    x1: padding,
    x2: Dimensions.get("window").width - 54,
  },
  backgroundColor: colors.white,
  backgroundGradientFrom: colors.white,
  backgroundGradientTo: colors.white,
  color: () => colors.light,
  labelColor: () => colors.greyMiddle,
  fillShadowGradientTo: colors.lightLilac,
  fillShadowGradientToOpacity: 0.3,
  fillShadowGradientToOffset: 0.8,
  fillShadowGradientFrom: colors.blue,
  fillShadowGradientFromOpacity: 0.3,
  fillShadowGradientFromOffset: 0.2,
  style: {
    marginTop: 16,
  },
};

const transformData = (data: (MoodEntry | null)[]) => {
  const result = data.map((mood, index) => {
    if (mood !== null) return moodsChartValueMap[mood.mood]; // Return non-null values as they are

    // Find previous non-null value
    const prev = data
      .slice(0, index)
      .reverse()
      .find((m) => m !== null);

    // Find next non-null value
    const next = data.slice(index + 1).find((m) => m !== null);

    // If both previous and next non-null values exist, calculate the average
    if (prev !== undefined && next !== undefined) {
      return (
        (moodsChartValueMap[prev.mood] + moodsChartValueMap[next.mood]) / 2
      );
    }
    return 0;
  });

  return result;
};

const iconSize = 24;

export function MoodsChart({
  moods,
}: {
  moods: Record<string, MoodEntry | null>;
}) {
  const chartData = transformData(Object.values(moods));
  const hidePointsAtIndex = chartData
    .map((cd, index) => (cd !== 0 ? -1 : index))
    .filter((index) => index !== -1);

  const data = {
    labels: Object.keys(daysOfWeek),
    datasets: [
      {
        data: chartData,
        color: () => colors.primary,
        strokeWidth: 1.5, // Optional
      },
      {
        data: [minChartValue], // Minimum value dataset
        color: () => "rgba(0, 0, 0, 0)", // Transparent to hide it
        withDots: false,
      },
      {
        data: [maxChartValue], // Maximum value dataset
        color: () => "rgba(0, 0, 0, 0)", // Transparent to hide it
        withDots: false,
      },
    ],
  };
  const chartHeight = 180;
  const lineChartProps: LineChartProps = {
    chartConfig,
    data,
    formatYLabel: () => "",
    fromZero: true,
    getDotColor: () => colors.blue,
    getDotProps: (_, index) => ({
      r: hidePointsAtIndex.includes(index) ? "" : "4",
    }),
    withVerticalLines: false,
    width: Dimensions.get("window").width - padding * 2,
    height: chartHeight,
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Heading level="2">Mood Graph</Heading>
      </View>
      <View style={styles.chartContainer}>
        <View style={[styles.moods, { top: 6 }]}>
          {moodsSorted.map((Mood, index) => {
            const segmentHeight =
              (chartHeight / (moodsSorted.length - 1)) * 0.75;
            return (
              <View
                key={index}
                style={[
                  styles.mood,
                  {
                    top: index * segmentHeight + (segmentHeight - iconSize) / 2,
                  },
                ]}
              >
                <Mood size={iconSize} />
              </View>
            );
          })}
        </View>
        <LineChart {...lineChartProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowColor: colors.lightLilac,
    borderRadius: 12,
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingBottom: 24,
  },
  chartContainer: {
    paddingTop: 24,
    overflow: "hidden",
  },
  heading: {
    paddingLeft: padding,
  },
  mood: {
    position: "absolute",
  },
  moods: {
    backgroundColor: colors.blue,
    left: padding,
    zIndex: 1,
    position: "absolute",
  },
});
