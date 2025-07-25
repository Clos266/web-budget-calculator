import { useLanguage } from "~/hooks/useLanguague";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="w-5 h-5 rounded-full overflow-hidden p-0 border-none"
      aria-label="Switch language"
    >
      <img
        src={language === "ca" ? "/en.png" : "/ca.svg"}
        alt={language === "ca" ? "English" : "Catalan"}
        className="w-full h-full object-cover"
      />
      <span className="sr-only">
        Switch to {language === "ca" ? "English" : "Catalan"}
      </span>
    </button>
  );
}
