// 📁 hooks/useCalculatorForm.ts
import { useState, useEffect } from "react";
import { calculateTotal } from "~/utils/calculateTotal";

export function useCalculatorForm(hasDiscount: boolean) {
  const [selectedServices, setSelectedServices] = useState({
    seo: false,
    ads: false,
    web: false,
  });
  const [numpages, setNumpages] = useState(0);
  const [numlanguage, setNumlanguage] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedServices((prev) => ({ ...prev, [name]: checked }));
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
    selectedServices,
    handleClick,
    numpages,
    setNumpages,
    numlanguage,
    setNumlanguage,
    total,
  };
}
