
import { SEO_PRICE, ADS_PRICE, WEB_PRICE } from "~/constants/prices"  ;

export const calculateTotal = (
  services: { seo: boolean; ads: boolean; web: boolean },
  pages: number,
  language: number,
  discount: boolean
) => {
  const base =
    (services.seo ? SEO_PRICE : 0) +
    (services.ads ? ADS_PRICE : 0) +
    (services.web ? WEB_PRICE : 0);

  const extras = services.web ? (pages + language) * 30 : 0;
  const total = base + extras;

  return discount ? total * 0.8 : total;
};
