import { SEO_PRICE, ADS_PRICE, WEB_PRICE } from "~/constants/prices";

export const calculateText = {
  toggle: {
    monthly: "Monthly payment",
    yearly: "Yearly payment",
  },
  total: (price: number) => `Total price: ${price} €`,
};