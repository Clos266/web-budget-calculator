import { useLanguage } from "~/hooks/useLanguague";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="" aria-label="Switch language">
      {language === "ca" ? (
        <>
          <img src="/en.png" alt="English" className="w-6 h-4" />
          <span className="sr-only">Switch to English</span>
        </>
      ) : (
        <>
          <img src="/ca.svg" alt="Catalan" className="w-6 h-4" />
          <span className="sr-only">Switch to Catalan</span>
        </>
      )}
    </button>
  );
}
