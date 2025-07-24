import { budgetCardText } from "~/i18n/ca/budgetCardText";

export const getServiceTags = (props: {
  seo?: boolean;
  ads?: boolean;
  web?: boolean;
  pages?: number;
  language?: number;
}) => {
  const tags = [];
  if (props.seo) tags.push("SEO");
  if (props.ads) tags.push("ADS");
  if (props.web)
    tags.push(
      `WEB (${props.pages} ${budgetCardText.pages} / ${props.language} ${budgetCardText.languages})`
    );
  return tags;
};