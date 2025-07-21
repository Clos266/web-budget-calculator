export type SavedBudget = {
  totalPlusUltra: number ;
  
  formData: {
    name: string;
    email?: string;
    telefon?: string;
  };
  selectedServices: {
    seo: boolean;
    ads: boolean;
    web: boolean;
  };
  paginas?: number;
  llenguatges?: number;
  date: string;
};