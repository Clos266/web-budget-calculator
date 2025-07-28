import { renderHook, act } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { useBudgets } from "../useBudgets";
import { fakeBudgets } from "~/data/fakeBudgets";
import type { SavedBudget } from "~/types/SavedBudget";

const budgets: SavedBudget[] = [
  {
    total: 500,
    formData: {
      name: "Extra Test",
      phone: "123456789",
      email: "test@test.com",
    },
    selectedServices: { seo: true, ads: false, web: true },
    pages: 3,
    language: 2,
    date: "2024-06-01T10:00:00.000Z",
  },
];

describe("useBudgets", () => {
  it("starts with combined budgets and fakeBudgets", async () => {
    const { result } = renderHook(() => useBudgets(budgets));

    await waitFor(() => {
      expect(result.current.filteredBudgets.length).toBe(
        budgets.length + fakeBudgets.length
      );
    });
  });

  it("filters budgets by search term", async () => {
    const { result } = renderHook(() => useBudgets(budgets));

    await waitFor(() => result.current.filteredBudgets.length > 0);

    act(() => {
      result.current.handleSearch("ramon");
    });

    await waitFor(() => {
      expect(result.current.filteredBudgets).toHaveLength(1);
      expect(result.current.filteredBudgets[0].formData.name).toMatch(/ramon/i);
    });
  });

  it("sorts budgets by date", async () => {
    const { result } = renderHook(() => useBudgets(budgets));

    await waitFor(() => result.current.filteredBudgets.length > 1);

    act(() => {
      result.current.sortByDate();
    });

    await waitFor(() => {
      const [a, b] = result.current.filteredBudgets;
      expect(new Date(a.date).getTime()).toBeGreaterThanOrEqual(
        new Date(b.date).getTime()
      );
    });
  });

  it("sorts budgets by price", async () => {
    const { result } = renderHook(() => useBudgets(budgets));

    await waitFor(() => result.current.filteredBudgets.length > 1);

    act(() => {
      result.current.sortByPrice();
    });

    await waitFor(() => {
      const [a, b] = result.current.filteredBudgets;
      expect(a.total).toBeGreaterThanOrEqual(b.total);
    });
  });

  it("resets filters", async () => {
    const { result } = renderHook(() => useBudgets(budgets));

    await waitFor(() => result.current.filteredBudgets.length > 1);

    act(() => {
      result.current.handleSearch("pedro");
    });

    await waitFor(() => {
      expect(result.current.filteredBudgets).toHaveLength(1);
    });

    act(() => {
      result.current.resetFilters();
    });

    await waitFor(() => {
      expect(result.current.search).toBe("");
      expect(result.current.filteredBudgets.length).toBe(
        budgets.length + fakeBudgets.length
      );
    });
  });
});
