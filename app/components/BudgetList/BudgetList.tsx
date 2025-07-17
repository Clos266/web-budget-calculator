import { FiCalendar, FiDollarSign, FiUser } from "react-icons/fi";
import BudgetCard from "../BudgetCard/BudgetCard";
import Calculate from "~/routes/calculate";

type SavedBudget = {
  price: number;
  formData: {
    name?: string;
    email?: string;
    telefon?: string;
  };
  selectedServices: {
    seo: boolean;
    ads: boolean;
    web: boolean;
  };
  paginas?: number;
  llenguatges?: number;
};

type Props = { budgets: SavedBudget[] };

const Budget = ({ budgets }: Props) => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
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

      {budgets.map((budget, index) => (
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
        />
      ))}
    </div>
  );
};

export default Budget;
