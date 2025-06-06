import { TLanguages, supportedLanguages } from "../assets/languages";

type TValidateLanguage = (lan: string) => TLanguages;

export const validateLanguage: TValidateLanguage = (lan: string) => {
    return supportedLanguages.includes(lan as TLanguages) ? (lan as TLanguages) : "en";
}