import { homeText as homeCA } from "./ca/homeText";
import { calculateText as calculateCA } from "./ca/calculateText";
import { homeText as homeEN } from "./en/homeText";
import { calculateText as calculateEN } from "./en/calculateText";

const lang = navigator.language.startsWith("en") ? "en" : "ca";

export const homeText = lang === "en" ? homeEN : homeCA;
export const calculateText = lang === "en" ? calculateEN : calculateCA;
