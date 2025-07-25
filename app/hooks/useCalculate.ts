import { useEffect, useState } from "react";
import type { SavedBudget } from "~/types/SavedBudget";
import { calculateTotal } from "~/utils/calculateTotal";

export const useCalculate = () => {
  const [budgets, setBudgets] = useState<SavedBudget[]>([]);
  const [selectedServices, setSelectedServices] = useState({
    seo: false,
    ads: false,
    web: false,
  });
  const [hasDiscount, setHasDiscount] = useState(false);
  const [numpages, setNumpages] = useState(0);
  const [numlanguage, setNumlanguage] = useState(0);
  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState(0);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    const newBudget: SavedBudget = {
      total,
      formData: data,
      selectedServices,
      pages: numpages,
      language: numlanguage,
      date: new Date().toISOString(),
    };
    setBudgets((prev) => [...prev, newBudget]);

    setSelectedServices({ seo: false, ads: false, web: false });
    setNumpages(0);
    setNumlanguage(0);
    setTotal(0);
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedServices((prev) => ({ ...prev, [name]: checked }));
  };

  const toggleDiscount = (checked: boolean) => {
    setHasDiscount(checked);
  };

  useEffect(() => {
    const newTotal = calculateTotal(
      selectedServices,
      numpages,
      numlanguage,
      hasDiscount
    );
    setTotal(newTotal);
  }, [selectedServices, numpages, numlanguage, hasDiscount]);

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
};
