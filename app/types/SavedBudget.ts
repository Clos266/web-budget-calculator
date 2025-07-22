export type SavedBudget = {
  total: number ;
  
  formData: {
    name: string;
    email?: string;
    phone?: string;
  };
  selectedServices: {
    seo: boolean;
    ads: boolean;
    web: boolean;
  };
  pages?: number;
  language?: number;
  date: string;
};