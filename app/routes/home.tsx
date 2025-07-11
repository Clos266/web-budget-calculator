import { Link } from "react-router-dom";
import Header from "~/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Bienvenido a la app de presupuestos
        </h1>
        <p className="mb-8 text-gray-700 text-lg">
          Usa el menú para ir a calcular presupuestos.
        </p>
        <Link to="/calculate">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition">
            Ir a Calcular Presupuesto
          </button>
        </Link>
      </div>
    </>
  );
}
