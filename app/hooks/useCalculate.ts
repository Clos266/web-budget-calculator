import { useBudgetManager } from "./useBudgetManager";
import { useCalculatorForm } from "./useCalculatorForm";
import { useDiscountToggle } from "./useDiscountToggle";
import type { SavedBudget } from "~/types/SavedBudget";

export function useCalculate() {
  const { hasDiscount, toggleDiscount } = useDiscountToggle();
  const {
    selectedServices,
    handleClick,
    numpages,
    setNumpages,
    numlanguage,
    setNumlanguage,
    total,
  } = useCalculatorForm(hasDiscount);

  const { budgets, addBudget } = useBudgetManager();

  const handleFormSubmit = (data: any) => {
    const newBudget: SavedBudget = {
      total,
      formData: data,
      selectedServices,
      pages: numpages,
      language: numlanguage,
      date: new Date().toISOString(),
    };

    addBudget(newBudget);

    setNumpages(0);
    setNumlanguage(0);

    Object.keys(selectedServices).forEach((key) => {
      handleClick({
        target: { name: key, checked: false },
      } as React.ChangeEvent<HTMLInputElement>);
    });
  };

  return {
    budgets,
    selectedServices,
    hasDiscount,
    numpages,
    numlanguage,
    total,
    handleFormSubmit,
    handleClick,
    toggleDiscount,
    setNumpages,
    setNumlanguage,
  };
}
