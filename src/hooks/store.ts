import { create } from "zustand";

interface MovieQuery {
  page: number;
  genreId?: number;
  searchText?: string;
  category?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setGenreId: (genreId: number) => void;
  setSearchText: (searchText: string) => void;
  setCategory: (category: string) => void;
  nextPage: (currentPage: number) => void;
  prePage: (currentPage: number) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: { page: 1, category: "upcoming" },
  setGenreId: (genreId) =>
    set(() => ({
      movieQuery: { genreId, page: 1 },
    })),
  setSearchText: (searchText) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, searchText } })),
  setCategory: (category) =>
    set(() => ({
      movieQuery: { category, page: 1 },
    })),
  nextPage: (currentPage) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, page: currentPage + 1 },
    })),
  prePage: (currentPage) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, page: currentPage - 1 },
    })),
}));

export default useMovieQueryStore;
