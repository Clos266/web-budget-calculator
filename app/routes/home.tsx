import { Link } from "react-router-dom";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import moon from "../assets/moon.svg";
import { SITE_NAME } from "~/constants/site";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="relative flex-grow flex flex-col items-center justify-center p-6 text-center space-y-8
  bg-gradient-to-br from-blue-50 via-white to-blue-100
  dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
  overflow-hidden
"
      >
        <img
          src={moon}
          alt="imatge de persona calculant pressupostos"
          className="w-full max-w-sm mx-auto"
        />
        <h1 className="text-4xl font-bold mb-4">Benvingut a {SITE_NAME}</h1>
        <p className="mb-8 text-gray-500 text-lg max-w-md">
          Estàs a un pas de crear pressupostos digitals personalitzats per la
          teva web i serveis online, de manera fàcil i ràpida.
        </p>
        <Link to="/calculate">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition">
            Comencem!
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
