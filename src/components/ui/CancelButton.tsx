import colors from "@/config/colors";
import React from "react";
import { CircledIcon } from "./CircledIcon";
import { AppPressableButton } from "./AppPressableButton";
import { CrossIcon } from "../icons";

type Props = {
  onPress: () => void;
};

export function CancelButton({ onPress }: Props) {
  return (
    <AppPressableButton onPress={onPress}>
      <CircledIcon
        size={36}
        backgroundColor={colors.greyLight}
        IconComponent={<CrossIcon size={10} color={colors.white} />}
      />
    </AppPressableButton>
  );
}
