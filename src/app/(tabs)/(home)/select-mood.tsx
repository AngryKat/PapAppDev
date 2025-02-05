import { StyleSheet } from "react-native";

import { AppText, ScreenWrapper } from "@/components/ui";
import colors from "@/config/colors";
import { ThisWeekMoodCheckIn } from "@/components/ThisWeekMoodCheckIn";

export default function SelectMoodScreen() {
  return (
    <ScreenWrapper>
      <AppText fontSize={14} style={styles.text}>
        Select your emotion
      </AppText>
      <ThisWeekMoodCheckIn />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
    marginBottom: 24,
  },
});
