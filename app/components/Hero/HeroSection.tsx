import { SITE_NAME } from "~/constants/site";
import { Link } from "react-router-dom";
import moon from "~/assets/moon.svg";
import { useTexts } from "~/i18n";

export function HeroSection() {
  const { homeText } = useTexts();

  return (
    <section
      className="
        relative flex flex-col lg:flex-row items-center justify-center p-6 text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-12
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        min-h-screen box-border overflow-y-visible
      "
    >
      <img
        src={moon}
        alt={homeText.altImage}
        className="w-full max-w-sm max-h-[40vh] lg:max-h-none lg:w-1/2 object-contain mx-auto"
      />
      <div className="flex flex-col items-center lg:items-start w-full max-w-md lg:w-1/2 lg:max-w-none">
        <h1 className="text-4xl font-bold">
          {homeText.title} {SITE_NAME}
        </h1>
        <p className="text-gray-500 text-lg mt-4">{homeText.description}</p>
        <Link to={homeText.buttonLink} className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition">
            {homeText.buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
