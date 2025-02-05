import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { AppButton } from "./AppButton";
import { Image, ImageSource } from "expo-image";
import { AppText } from "./AppText";
import colors from "@/config/colors";

type Props = {
  backgroundColor?: ColorValue;
  buttonBlock?: boolean;
  buttonTitle?: string;
  image?: ImageSource;
  onPress: () => void;
  title: string;
};

export function SmallCard({
  backgroundColor = colors.white,
  buttonBlock = true,
  buttonTitle,
  image,
  onPress,
  title,
}: Props) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <AppText fontWeight="500" fontSize={12}>
          {title}
        </AppText>
        <AppButton
          block={buttonBlock}
          onPress={onPress}
          small
          variant="outlined"
        >
          {buttonTitle ?? "Start"}
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.lightLilac,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 23,
    paddingVertical: 19,
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowColor: colors.lightLilac,
  },
  content: {
    gap: 8,
    flexShrink: 1,
  },
  image: {
    height: 77,
    width: 77,
    borderRadius: 8,
    overflow: "hidden",
  },
});
