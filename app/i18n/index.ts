import { homeText as homeTextEN } from "./en/homeText";
import { homeText as homeTextCA } from "./ca/homeText";
import { calculateText as calculateTextEN } from "./en/calculateText";
import { calculateText as calculateTextCA } from "./ca/calculateText";
import { useLanguage } from "./LanguageContext";

export function useTexts() {
  const { language } = useLanguage();

  const homeText = language === "en" ? homeTextEN : homeTextCA;
  const calculateText = language === "en" ? calculateTextEN : calculateTextCA;

  return { homeText, calculateText };
}
