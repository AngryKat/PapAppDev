import React from "react";
import { Stack } from "expo-router";
import { AppText } from "@/components/ui";
import { AppNavBar } from "@/components/AppNavBar";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ header: AppNavBar }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome to pap",
        }}
      />
    </Stack>
  );
}
