import { useState, useEffect } from "react";
import type { SavedBudget } from "~/types/SavedBudget";
import { fakeBudgets } from "~/data/fakeBudgets";

export function useBudgets(budgets: SavedBudget[]) {
  const [filteredBudgets, setFilteredBudgets] = useState<SavedBudget[]>([]);
  const [search, setSearch] = useState("");
  const [dateAsc, setDateAsc] = useState(false);
  const [priceAsc, setPriceAsc] = useState(false);

  useEffect(() => {
    setFilteredBudgets([...budgets, ...fakeBudgets]);
  }, [budgets]);

  const handleSearch = (term: string) => {
    setSearch(term);
    if (!term.trim()) {
      setFilteredBudgets([...budgets, ...fakeBudgets]);
      return;
    }
    const lowerTerm = term.toLowerCase();
    setFilteredBudgets(
      [...budgets, ...fakeBudgets].filter((b) =>
        b.formData.name.toLowerCase().includes(lowerTerm)
      )
    );
  };

  const sortByDate = () => {
    const sorted = [...filteredBudgets].sort((a, b) => {
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return dateAsc ? diff : -diff;
    });
    setFilteredBudgets(sorted);
    setDateAsc(!dateAsc);
  };

  const sortByPrice = () => {
    const sorted = [...filteredBudgets].sort((a, b) => {
      const diff = a.total - b.total;
      return priceAsc ? diff : -diff;
    });
    setFilteredBudgets(sorted);
    setPriceAsc(!priceAsc);
  };

  const resetFilters = () => {
    setSearch("");
    setFilteredBudgets([...budgets, ...fakeBudgets]);
    setDateAsc(false);
    setPriceAsc(false);
  };

  return {
    filteredBudgets,
    search,
    handleSearch,
    sortByDate,
    sortByPrice,
    resetFilters,
    dateAsc,
    priceAsc,
  };
}
