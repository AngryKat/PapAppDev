import { InputPhone } from "@/config/types";

export function transformPhoneToInputPhone(phone: string, countryCode: string): InputPhone {
  return {
    phoneNumber: phone.slice(-10),
    phoneCode: phone.slice(0, -10),
    countryCode,
  }
}