import { renderHook, act } from "@testing-library/react";
import { useBudgetManager } from "../useBudgetManager";
import type { SavedBudget } from "~/types/SavedBudget";

describe("useBudgetManager", () => {
  it("starts with empty budgets", () => {
    const { result } = renderHook(() => useBudgetManager());
    expect(result.current.budgets).toEqual([]);
  });

  it("adds a budget", () => {
    const { result } = renderHook(() => useBudgetManager());

    const newBudget: SavedBudget = {
      total: 100,
      formData: {
        name: "Test User",
        email: "test@example.com",
        phone: "123456789",
      },
      selectedServices: {
        seo: true,
        ads: false,
        web: true,
      },
      pages: 1,
      language: 1,
      date: new Date().toISOString(),
    };

    act(() => {
      result.current.addBudget(newBudget);
    });

    expect(result.current.budgets).toHaveLength(1);
    expect(result.current.budgets[0]).toEqual(newBudget);
  });
});
