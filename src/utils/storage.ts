import AsyncStorage from "@react-native-async-storage/async-storage"

export type AsyncStorageKey = 'isSignedUp' | 'isOnBoarded'

export async function setItem(key: AsyncStorageKey, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Could not set item with key ', key);
  }
}
export async function getItem(key: AsyncStorageKey) {
  return await AsyncStorage.getItem(key);
}