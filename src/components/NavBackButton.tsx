import React from "react";
import { Href, router } from "expo-router";

import { CircledIcon } from "./ui/CircledIcon";
import colors from "@/config/colors";
import { AppPressableButton } from "./ui";
import { ArrowLeftIcon } from "./icons";

type Props = {
  onPress?: () => void;
};

export function NavBackButton({ onPress }: Props) {
  return (
    <AppPressableButton
      accessibilityLabel="back"
      onPress={() => (!!onPress ? onPress() : router.back())}
    >
      <CircledIcon
        size={32}
        backgroundColor={colors.light}
        IconComponent={<ArrowLeftIcon color={colors.darkblue} size={20} />}
      />
    </AppPressableButton>
  );
}
