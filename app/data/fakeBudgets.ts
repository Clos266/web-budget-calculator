import type { SavedBudget } from "~/types/SavedBudget";

export const fakeBudgets: SavedBudget[] = [
  {
    total: 1260,
    formData: {
      name: "Pedro Piedras",
      phone: "7778458963",
      email: "pedro@piedras.com",
    },
    selectedServices: { seo: true, ads: true, web: true },
    pages: 1,
    language: 1,
    date: "2023-07-18T14:29:34.697Z",
  },
  {
    total: 22222,
    formData: {
      name: "Ramon Jamon",
      phone: "665896321",
      email: "Ramon@jam.on",
    },
    selectedServices: { seo: true, ads: false, web: false },
    pages: 2,
    language: 1,
    date: "2025-07-17T14:29:54.665Z",
  },
  {
    total: 9,
    formData: {
      name: "Sup Super",
      phone: "665412369",
      email: "supersup@su.p",
    },
    selectedServices: { seo: false, ads: true, web: true },
    pages: 0,
    language: 10,
    date: "2024-07-16T14:30:10.005Z",
  },
];
