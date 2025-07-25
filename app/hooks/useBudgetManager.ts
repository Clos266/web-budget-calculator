// 📁 hooks/useBudgetManager.ts
import { useState } from "react";
import type { SavedBudget } from "~/types/SavedBudget";

export function useBudgetManager() {
  const [budgets, setBudgets] = useState<SavedBudget[]>([]);

  const addBudget = (budget: SavedBudget) => {
    setBudgets((prev) => [...prev, budget]);
  };

  return {
    budgets,
    addBudget,
  };
}
