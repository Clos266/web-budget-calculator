import { useLanguage } from "~/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      aria-label="Switch language"
    >
      {language === "ca" ? "EN" : "CA"}
    </button>
  );
}
