import React from "react";
import { Stack } from "expo-router";
import { AppNavBar } from "@/components/AppNavBar";

export default function PapJournalLayout() {
  return (
    <Stack screenOptions={{ header: AppNavBar }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Pap Journal",
        }}
      />
      <Stack.Screen
        name="journal-entry"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
}
