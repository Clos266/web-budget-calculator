import { FiCalendar, FiDollarSign, FiUser } from "react-icons/fi";

const Budget = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      {/* Encabezado y Filtros */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-white">Pressupostos en Curs</h2>

        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-blue-800 rounded-md hover:bg-blue-200 transition">
            <FiCalendar className="inline mr-1" />
            Data
          </button>
          <button className="px-3 py-1 text-sm bg-blue-800 rounded-md hover:bg-gray-200 transition">
            <FiDollarSign className="inline mr-1" />
            Import
          </button>
          <button className="px-3 py-1 text-sm bg-blue-800 rounded-md hover:bg-gray-200 transition">
            <FiUser className="inline mr-1" />
            Nom
          </button>
        </div>
      </div>

      {/* Tarjeta de Presupuesto */}
      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-blue-600">NameName</h3>
            <p className="text-gray-600 text-sm">email@email</p>
            <p className="text-gray-600 text-sm">111 111 111</p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-blue-600">Serveis</h4>
            <div className="flex justify-center gap-2 mt-1">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                SEO
              </span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                Ads
              </span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                Web
              </span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-bold text-blue-600">
              Total: <span className="text-lg">111€</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
