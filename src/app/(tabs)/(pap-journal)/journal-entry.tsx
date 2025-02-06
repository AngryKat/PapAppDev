import { JournalEntryForm } from "@/components/JournalEntry/JournalEntryForm";
import { AppText, ScreenWrapper } from "@/components/ui";
import { StyleSheet, View } from "react-native";

export default function JournalEntryScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <JournalEntryForm />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
});
