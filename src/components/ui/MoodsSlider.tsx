import React, { forwardRef, LegacyRef, MutableRefObject } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Slider, { SliderRef } from "@react-native-community/slider";
import { AppText } from "./AppText";
import { Mood, Moods } from "@/config/types";
import colors from "@/config/colors";
import { moodItems } from "@/helpers/moods";
import { applyOpacityToHex } from "@/utils";

type Props = {
  onMoodChange: (mood: Mood) => void;
  value: Mood;
};

let index = 0;
export const MoodsSlider = forwardRef<Slider, Props>(
  ({ onMoodChange, value }, ref) => {
    const sliderValue = Moods.findIndex((elem) => elem === value);

    const handleSliderChange = (value: number) => {
      onMoodChange(Moods[Math.floor(value - 0.5) + 1]);
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
          maximumTrackTintColor={applyOpacityToHex(colors.primary, 40)}
          maximumValue={4}
          minimumTrackTintColor={colors.primary}
          minimumValue={0}
          onValueChange={handleSliderChange}
          style={{ width: Dimensions.get("window").width - 96 }}
          value={sliderValue}
        />
        <View style={styles.labelsContainer}>
          {Object.values(moodItems).map(({ key, label }) => (
            <View
              key={key}
              style={[
                styles.sliderLabelContainer,
                index === 0 && {
                  paddingRight: 8, // force the first item to wrap like the last item
                },
              ]}
            >
              <AppText style={styles.sliderLabelText}>{label}</AppText>
            </View>
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
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    marginTop: -8, // negate gap
  },
  text: {
    textTransform: "capitalize",
  },
  sliderLabelContainer: {
    alignItems: "center",
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
  },
  sliderLabelText: {
    textAlign: "center",
  },
});
