import { Link } from "react-router-dom";
import logo from "app/assets/logo.svg";
import { navLinks } from "~/i18n/ca/navigation";
import { loginButtons } from "~/data/loginButtons";
import { SITE_NAME } from "~/constants/site";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt={`Logo of ${SITE_NAME}`}
              className="w-48 h-auto"
            />
          </Link>
        </h1>

        <nav className="flex flex-wrap items-center gap-6 hidden md:flex ">
          <ul className="flex gap-6">
            {navLinks.map(({ path, label }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-blue-600 dark:text-white hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <Link
              to={loginButtons.login.path}
              className="px-4 py-2 rounded-full bg-blue-600 w-28 text-center text-white hover:bg-blue-700 transition"
            >
              {loginButtons.login.label}
            </Link>
            <Link
              to={loginButtons.signup.path}
              className="px-4 py-2 rounded-full border border-blue-600 w-28 text-center text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white transition"
            >
              {loginButtons.signup.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
