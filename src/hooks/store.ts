import { create } from "zustand";

interface MovieQuery {
  page: number;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  nextPage: (currentPage: number) => void;
  prePage: (currentPage: number) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: { page: 1 },
  nextPage: (currentPage) =>
    set(() => ({
      movieQuery: { page: currentPage + 1 },
    })),
  prePage: (currentPage) =>
    set(() => ({ movieQuery: { page: currentPage - 1 } })),
}));

export default useMovieQueryStore;
