import BudgetCard from "../Cards/BudgetCard";
import { useBudgets } from "~/hooks/useBudgets";
import type { SavedBudget } from "~/types/SavedBudget";
import { budgetListText } from "~/i18n/ca/budgetListText";
import { FiRefreshCcw } from "react-icons/fi";

type Props = { budgets: SavedBudget[] };

const BudgetList = ({ budgets }: Props) => {
  const {
    filteredBudgets,
    search,
    handleSearch,
    sortByDate,
    sortByPrice,
    resetFilters,
    dateAsc,
    priceAsc,
  } = useBudgets(budgets);

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <h2 className="text-xl font-bold mb-6 text-center">
        {budgetListText.titles.budgetsInProgress}
      </h2>

      <div className="flex flex-wrap gap-2 items-center justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={budgetListText.placeholders.searchName}
          className="px-3 py-2 border rounded w-full sm:w-auto max-w-sm"
        />
        <button onClick={sortByDate} className="btn-primary">
          {budgetListText.buttons.sortByDate} {dateAsc ? "▲" : "▼"}
        </button>
        <button onClick={sortByPrice} className="btn-primary">
          {budgetListText.buttons.sortByPrice} {priceAsc ? "▲" : "▼"}
        </button>
        <button
          onClick={resetFilters}
          className="btn-secondary flex items-center gap-2"
        >
          <FiRefreshCcw />
          {budgetListText.buttons.reset}
        </button>
      </div>

      {filteredBudgets.map((budget) => (
        <BudgetCard
          key={budget.date + budget.formData.email}
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
      ))}
    </div>
  );
};

export default BudgetList;
