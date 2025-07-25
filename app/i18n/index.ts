import { homeText as homeTextEN } from "./en/homeText";
import { homeText as homeTextCA } from "./ca/homeText";
import { textFooter as textFooterEN } from "./en/footer";
import { textFooter as textFooterCA } from "./ca/footer";
import { navLinks as navigationEN } from "./en/navigation";
import { navLinks as navigationCA } from "./ca/navigation";
import { formText as formTextCA } from "./ca/formText";
import { formText as formTextEN } from "./en/formText";
import { calculateText as calculateTextEN } from "./en/calculateText";
import { calculateText as calculateTextCA } from "./ca/calculateText";
import { budgetListText as budgetListTextCA } from "./ca/budgetListText";
import { budgetListText as budgetListTextEN } from "./en/budgetListText";
import { budgetCardText as budgetCardTextEN } from "./en/budgetCardText";
import { budgetCardText as budgetCardTextCA } from "./ca/budgetCardText";
import { serviceCardText as serviceCardTextEN } from "./en/serviceCardText";
import { serviceCardText as serviceCardTextCA } from "./ca/serviceCardText";
import { servicesText as servicesTextEN } from "./en/servicesText";
import { servicesText as servicesTextCA } from "./ca/servicesText";

import { useLanguage } from "../hooks/useLanguague";

export function useTexts() {
  const { language } = useLanguage();

  const homeText = language === "en" ? homeTextEN : homeTextCA;
  const textFooter = language === "en" ? textFooterEN : textFooterCA;
  const navigation = language === "en" ? navigationEN : navigationCA;
  const formText = language === "en" ? formTextEN : formTextCA;
  const budgetListText =
    language === "en" ? budgetListTextEN : budgetListTextCA;
  const calculateText = language === "en" ? calculateTextEN : calculateTextCA;
  const budgetCardText =
    language === "en" ? budgetCardTextEN : budgetCardTextCA;
  const serviceCardText =
    language === "en" ? serviceCardTextEN : serviceCardTextCA;
  const servicesText = language === "en" ? servicesTextEN : servicesTextCA;

  return {
    homeText,
    calculateText,
    budgetCardText,
    serviceCardText,
    textFooter,
    navigation,
    formText,
    budgetListText,
    servicesText,
  };
}
