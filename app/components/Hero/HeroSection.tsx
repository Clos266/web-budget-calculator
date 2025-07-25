import { homeText } from "~/i18n/ca/homeText";
import { SITE_NAME } from "~/constants/site";
import { Link } from "react-router-dom";
import moon from "~/assets/moon.svg";

export function HeroSection() {
  return (
    <section
      className="
        relative flex flex-col items-center justify-center p-6 text-center space-y-8
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        overflow-hidden
      "
    >
      <img
        src={moon}
        alt={homeText.altImage}
        className="w-full max-w-sm mx-auto"
      />
      <h1 className="text-4xl font-bold">
        {homeText.title} {SITE_NAME}
      </h1>
      <p className="text-gray-500 text-lg max-w-md">{homeText.description}</p>
      <Link to={homeText.buttonLink}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition">
          {homeText.buttonText}
        </button>
      </Link>
    </section>
  );
}
