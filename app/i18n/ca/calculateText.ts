import { SEO_PRICE, ADS_PRICE, WEB_PRICE } from "~/constants/prices";

export const calculateText = {
  toggle: {
    monthly: "Pagament mensual",
    yearly: "Pagament anual",
  },
  total: (price: number) => `Preu total: ${price} €`,
};
