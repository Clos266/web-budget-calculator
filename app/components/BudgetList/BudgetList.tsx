import {
  FiCalendar,
  FiDollarSign,
  FiUser,
  FiRefreshCcw,
  FiSearch,
} from "react-icons/fi";
import BudgetCard from "../BudgetCard/BudgetCard";
import type { SavedBudget } from "~/types/SavedBudget";

type Props = { budgets: SavedBudget[] };

const BudgetList = ({ budgets }: Props) => {
  // console.log("<<bugets", budgets);
  const originalBudget = [];
  const dateBudget = [];
  const alphaBudget = [];
  const priceBudget = [];

  const fakeBudgets = [
    {
      price: 1260,
      formData: {
        name: "pedrin",
        telefon: "12345643424",
        email: "pe@dro.n",
      },
      selectedServices: {
        seo: true,
        ads: true,
        web: true,
      },
      paginas: 1,
      llenguatges: 1,
      date: "2025-07-18T14:29:34.697Z",
    },
    {
      price: 22222,
      formData: {
        name: "jamon",
        telefon: "12345643424",
        email: "pe@dro.jamon",
      },
      selectedServices: {
        seo: true,
        ads: false,
        web: false,
      },
      paginas: 55555,
      llenguatges: 0,
      date: "2025-07-18T14:29:54.665Z",
    },
    {
      price: 99999,
      formData: {
        name: "supsup",
        telefon: "12345643424",
        email: "sup@su.p",
      },
      selectedServices: {
        seo: false,
        ads: true,
        web: false,
      },
      paginas: 0,
      llenguatges: 10,
      date: "2025-07-18T14:30:10.005Z",
    },
  ];
  const finalbudget = [...budgets, ...fakeBudgets];
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-white">Pressupostos en Curs</h2>

        <div className="flex gap-2">
          <input className="bg-white text-blue-600" type="text"></input>
          <button className="px-3 py-1 text-sm bg-blue-800 rounded-md hover:bg-blue-200 transition">
            <FiSearch className="inline mr-1" />
          </button>
        </div>
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
          <button className="px-3 py-1 text-sm bg-blue-800 rounded-md hover:bg-gray-200 transition">
            <FiRefreshCcw className="inline mr-1" />
            reset
          </button>
        </div>
      </div>

      {finalbudget.map((budget, index) => {
        console.log("<<budget", budget);
        return (
          <BudgetCard
            key={index}
            name={budget.formData.name || ""}
            email={budget.formData.email || ""}
            phone={budget.formData.telefon || ""}
            seo={budget.selectedServices.seo}
            ads={budget.selectedServices.ads}
            web={budget.selectedServices.web}
            price={budget.price}
            paginas={budget.paginas}
            llenguatges={budget.llenguatges}
            date={budget.date}
          />
        );
      })}
    </div>
  );
};

export default BudgetList;
