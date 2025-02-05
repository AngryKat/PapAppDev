import { Timestamp } from "firebase/firestore";

export type CustomSearchBarOptions = {
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export type PickedImage = { uri: string; timestamp: number };

export type JournalEntry = {
  content: string;
  date: Date;
  id: string;
  title: string;
};

export type AnonymousUser = Pick<User, 'phone'>

export type User = {
  id: string;
  gender: string;
  phone: InputPhone;
  name: string;
  photo: PickedImage | null;
  age: number;
};

export type UserApi = Omit<User, 'phone'> & {
  phone: string;
  countryCode: string;
};

export type JournalEntryApi = {
  id: string;
  title: string;
  content: string;
  date: Timestamp;
  author: any;
};

export type MoodApi = {
  id: string;
  date: Timestamp;
  mood: Mood;
  user: any;
};

export type MoodEntry = {
  id: string;
  date: Date | string;
  mood: Mood;
};

export const Moods = [
  "very_sad",
  "sad",
  "neutral",
  "happy",
  "very_happy",
] as const;
export type Mood = typeof Moods[number];

export type InputPhone = {
  countryCode: string;
  phoneCode: string;
  phoneNumber: string;
};

export type OnboardData = {
  age: string;
  mood: Mood;
  purpose: string;
};