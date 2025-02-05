import { type ReactNode } from "react";
import { type Mood } from "@/config/types";
import moodIcons from "@/components/icons/emojis";
import { type IconAdapterProps } from "@/components/icons/IconAdapter";


export type MoodItem = {
  key: Mood;
  Icon: (props: IconAdapterProps) => ReactNode;
  label: string;
};
export const moodItems: Record<Mood, MoodItem> = {
  very_sad: {
    key: "very_sad",
    Icon: moodIcons.VerySadEmojiIcon,
    label: "Very sad",
  },
  sad: {
    key: "sad",
    Icon: moodIcons.SadEmojiIcon,
    label: "Sad",
  },
  neutral: {
    key: "neutral",
    Icon: moodIcons.NeutralEmojiIcon,
    label: "Neutral",
  },
  happy: {
    key: "happy",
    Icon: moodIcons.HappyEmojiIcon,
    label: "Happy",
  },
  very_happy: {
    key: "very_happy",
    Icon: moodIcons.VeryHappyEmojiIcon,
    label: "Very happy",
  },
};