import React from "react";
import { Stack } from "expo-router";

export default function PapJournalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Pap Journal",
        }}
      />
    </Stack>
  );
}
