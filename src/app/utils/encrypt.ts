import * as CryptoJS from "crypto-js"
import { environment } from "../../environments/environment"

export const encrypt = (data: string): string => {
  return CryptoJS.AES.encrypt(data, environment.encryptKey).toString();
}


export const decrypt = <T>(value: string): T | null => {
  const valueDecrypted = CryptoJS.AES.decrypt(value, environment.encryptKey).toString(CryptoJS.enc.Utf8);
  if(!valueDecrypted) return null;

  return JSON.parse(valueDecrypted) as T
}

