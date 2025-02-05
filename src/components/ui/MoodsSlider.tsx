import React, {
  forwardRef,
  LegacyRef,
  MutableRefObject,
  ReactNode,
} from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Slider, { SliderRef } from "@react-native-community/slider";
import { AppText } from "./AppText";
import { Mood, Moods } from "@/config/types";
import colors from "@/config/colors";
import { applyOpacityToHex } from "@/utils";

import moodIcons from "@/components/icons/emojis";
import { IconAdapterProps } from "../icons/IconAdapter";

type MoodItem = {
  Icon: (props: IconAdapterProps) => ReactNode;
  key: Mood;
  label: string;
};
const moodItems: Record<Mood, MoodItem> = {
  very_sad: {
    label: "Very sad",
    Icon: moodIcons.VerySadEmojiIcon,
    key: "very_sad",
  },
  sad: {
    label: "Sad",
    Icon: moodIcons.SadEmojiIcon,
    key: "sad",
  },
  neutral: {
    label: "Neutral",
    Icon: moodIcons.NeutralEmojiIcon,
    key: "neutral",
  },
  happy: {
    label: "Happy",
    Icon: moodIcons.HappyEmojiIcon,
    key: "happy",
  },
  very_happy: {
    label: "Very happy",
    Icon: moodIcons.VeryHappyEmojiIcon,
    key: "very_happy",
  },
};

type Props = {
  onMoodChange: (mood: Mood) => void;
  value: Mood;
};

export const MoodsSlider = forwardRef<Slider, Props>(
  ({ onMoodChange, value }, ref) => {
    const sliderValue = Moods.findIndex((elem) => elem === value);

    const handleSliderChange = (value: number) => {
      onMoodChange(Moods[value]);
    };
    const { Icon, label } = moodItems[value];
    return (
      <View style={styles.container}>
        <Icon size={88} />
        <AppText fontSize={16} fontWeight="500" style={styles.text}>
          {label}
        </AppText>
        <Slider
          ref={
            ref as LegacyRef<Slider> &
              (MutableRefObject<SliderRef> & LegacyRef<Slider>)
          }
          style={{ width: Dimensions.get("window").width - 48 }}
          minimumValue={0}
          maximumValue={4}
          value={sliderValue}
          onValueChange={handleSliderChange}
          step={1}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={applyOpacityToHex(colors.primary, 40)}
        />
        <View style={styles.labelsContainer}>
          {Object.values(moodItems).map(({ label, key }) => (
            <AppText key={key}>{label}</AppText>
          ))}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  text: {
    textTransform: "capitalize",
  },
});
