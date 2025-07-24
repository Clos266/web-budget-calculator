export type BudgetCardProps = {
  name: string;
  email: string;
  phone: string | number;
  seo?: boolean;
  ads?: boolean;
  web?: boolean;
  total: string | number;
  pages?: number;
  language?: number;
  date: string;
};