import { SEO_PRICE, ADS_PRICE, WEB_PRICE } from "~/constants/prices";

export const services = [
  {
    title: "Seo",
    name: "seo",
    description:
      "Optimització per a motors de cerca per millorar la visibilitat.",
    price: SEO_PRICE,
  },
  {
    title: "Ads",
    name: "ads",
    description:
      "Gestió de campanyes publicitàries per arribar al teu públic objectiu.",
    price: ADS_PRICE,
  },
  {
    title: "Web",
    name: "web",
    description: "Disseny i desenvolupament de pàgines web personalitzades.",
    price: WEB_PRICE,
    isSpecial: true,
  },
];
