import {
  FiCalendar,
  FiDollarSign,
  FiUser,
  FiRefreshCcw,
  FiSearch,
} from "react-icons/fi";
import BudgetCard from "../BudgetCard/BudgetCard";
import type { SavedBudget } from "~/types/SavedBudget";
import React, { useState } from "react";

type Props = { budgets: SavedBudget[] };

const BudgetList = ({ budgets }: Props) => {
  // console.log("<<bugets", budgets);
  const originalBudget = [];
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
  const finalBudget = [...budgets, ...fakeBudgets];
  const [name, setName] = useState([]);
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log("<<e busca busca", e.target);
  };
  let searchResult = [];
  if (!search) {
    searchResult = finalBudget;
  } else {
    searchResult = finalBudget.filter((dato) =>
      dato.formData.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  console.log("<<<searchresult", searchResult);
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-center sm:text-left flex-grow">
          Pressupostos en Curs
        </h2>

        <div className="flex h-9 gap-2 justify-center sm:justify-start w-full sm:w-auto">
          <input
            onChange={searcher}
            value={search}
            type="text"
            placeholder="Cerca..."
            className="bg-white border border-gray-300 rounded-md px-2 py-1 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
            <FiSearch className="inline mr-1" />
          </button>
        </div>

        <div className="flex gap-2 h-9 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
            <FiCalendar className="inline mr-1" />
            Data
          </button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
            <FiDollarSign className="inline mr-1" />
            Import
          </button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
            <FiUser className="inline mr-1" />
            Nom
          </button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
            <FiRefreshCcw className="inline mr-1" />
          </button>
        </div>
      </div>

      {searchResult.map((budget, index) => {
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
