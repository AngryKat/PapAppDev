import React from "react";
import { Stack } from "expo-router";
import { AppNavBar } from "@/components/AppNavBar";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        header: AppNavBar,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome to Pap",
        }}
      />
      <Stack.Screen
        name="select-mood"
        options={{
          title: "How do you feel?",
        }}
      />
    </Stack>
  );
}
