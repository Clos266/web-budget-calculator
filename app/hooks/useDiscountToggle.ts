import { useState } from "react";

export function useDiscountToggle() {
  const [hasDiscount, setHasDiscount] = useState(false);

  const toggleDiscount = (checked: boolean) => {
    setHasDiscount(checked);
  };

  return {
    hasDiscount,
    toggleDiscount,
  };
}
