import { Tabs } from "expo-router";
import React from "react";
import colors from "@/config/colors";
import fonts from "@/config/fonts";
import { BookIcon, GearIcon, HomeIcon } from "@/components/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: colors.blueLight2,
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.PoppinsRegular,
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(pap-journal)"
        options={{
          title: "Pap Journal",
          tabBarIcon: ({ color }) => <BookIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <GearIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
