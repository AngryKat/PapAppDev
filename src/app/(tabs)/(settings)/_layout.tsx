import React from "react";
import { Stack } from "expo-router";
import { AppNavBar } from "@/components/AppNavBar";

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ header: AppNavBar }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
