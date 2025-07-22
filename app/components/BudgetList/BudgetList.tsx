import {
  FiCalendar,
  FiDollarSign,
  FiRefreshCcw,
  FiSearch,
  FiArrowDown,
  FiArrowUp,
} from "react-icons/fi";
import BudgetCard from "../BudgetCard/BudgetCard";
import type { SavedBudget } from "~/types/SavedBudget";
import React, { useEffect, useState, useMemo } from "react";

type Props = { budgets: SavedBudget[] };
const fakeBudgets = [
  {
    total: 1260,
    formData: {
      name: "Pedro Piedras",
      phone: "12345643424",
      email: "pedro@piedras.com",
    },
    selectedServices: {
      seo: true,
      ads: true,
      web: true,
    },
    pages: 1,
    language: 1,
    date: "2023-07-18T14:29:34.697Z",
  },
  {
    total: 22222,
    formData: {
      name: "Ramon Jamon",
      phone: "12345643424",
      email: "Ramon@jam.on",
    },
    selectedServices: {
      seo: true,
      ads: false,
      web: false,
    },
    pages: 2,
    language: 1,
    date: "2025-07-17T14:29:54.665Z",
  },
  {
    total: 9,
    formData: {
      name: "Sup Sup",
      phone: "12345643424",
      email: "sup@su.p",
    },
    selectedServices: {
      seo: false,
      ads: true,
      web: true,
    },
    pages: 0,
    language: 10,
    date: "2024-07-16T14:30:10.005Z",
  },
];

const BudgetList = ({ budgets }: Props) => {
  const finalBudget = useMemo(() => [...budgets, ...fakeBudgets], [budgets]);

  const [sortedBudgets, setSortedBudgets] = useState<SavedBudget[]>([]);
  const [search, setSearch] = useState("");
  const [isDateAsc, setIsDateAsc] = useState(false);
  const [isPriceAsc, setIsPriceAsc] = useState(false);

  useEffect(() => {
    setSortedBudgets(finalBudget);
  }, [finalBudget]);

  const searcher = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;

    setSearch(searchTerm);

    if (!searchTerm) {
      setSortedBudgets(finalBudget);
    } else {
      const searchedBudget = finalBudget.filter((dato) =>
        dato.formData.name
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );

      setSortedBudgets(searchedBudget);
    }
  };

  const sortByPrice = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      const totalA = a.total;
      const totalB = b.total;
      return isPriceAsc ? totalA - totalB : totalB - totalA;
    });

    setSortedBudgets(sorted);
    setIsPriceAsc(!isPriceAsc);
  };

  const sortByDate = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return isDateAsc ? dateA - dateB : dateB - dateA;
    });

    setSortedBudgets(sorted);
    setIsDateAsc(!isDateAsc);
  };

  const reset = () => {
    setSortedBudgets(finalBudget);
  };

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
            Nom
          </button>
        </div>

        <div className="flex gap-2 h-9 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
          <button
            onClick={sortByDate}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center"
          >
            <FiCalendar className="inline mr-1" />
            Data {isDateAsc ? <FiArrowUp /> : <FiArrowDown />}
          </button>
          <button
            onClick={sortByPrice}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center"
          >
            <FiCalendar className="inline mr-1" />
            Import {isPriceAsc ? <FiArrowUp /> : <FiArrowDown />}
          </button>
          <button
            onClick={reset}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center"
          >
            <FiRefreshCcw className="inline mr-1" /> Reset
          </button>
        </div>
      </div>

      {sortedBudgets.map((budget, index) => {
        return (
          <BudgetCard
            key={index}
            name={budget.formData.name || ""}
            email={budget.formData.email || ""}
            phone={budget.formData.phone || ""}
            seo={budget.selectedServices.seo}
            ads={budget.selectedServices.ads}
            web={budget.selectedServices.web}
            total={budget.total}
            pages={budget.pages}
            language={budget.language}
            date={budget.date}
          />
        );
      })}
    </div>
  );
};

export default BudgetList;
