import { create } from "zustand";
import data from "data/data.json";

interface ListState {
  listings: Listing[];
  filters: string[];
  setFilter: (newfilter: string) => void;
  removeFilter: (filter: string) => void;
  getFiltered: () => Listing[] | undefined;
  clearFiltered: () => void;
}

const useListingsStore = create<ListState>((set, get) => ({
  // initial state
  listings: data,
  filters: [],
  // actions
  setFilter: (newFilter: string) => {
    const currentFilters = get().filters;
    if (currentFilters.includes(newFilter)) return;

    set((state) => {
      return { ...state, filters: [...state.filters, newFilter] };
    });
  },
  removeFilter: (filter) => {
    set((state) => {
      const newFilters = state.filters.filter((el) => el !== filter);
      return {
        ...state,
        filters: newFilters,
      };
    });
  },
  getFiltered: () => {
    const currentFilters = get().filters;
    if (!currentFilters.length) return;

    return get().listings.filter((listing) =>
      // match every filter with every listing category
      currentFilters.every((filter) =>
        [
          listing.role,
          listing.level,
          ...listing.languages,
          ...listing.tools,
        ].includes(filter),
      ),
    );
  },
  clearFiltered: () => {
    set((state) => {
      return { ...state, filters: [] };
    });
  },
}));

export default useListingsStore;
