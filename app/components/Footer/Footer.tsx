import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { SITE_NAME } from "~/constants/site";
import { textFooter } from "~/i18n/ca/footer";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-600 dark:text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} {SITE_NAME}
          {textFooter.copyright}
        </div>

        <div className="flex gap-4 text-gray-600 dark:text-gray-300">
          <FiFacebook size={24} />

          <FiInstagram size={24} />

          <FiMail size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
