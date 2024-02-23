import { create } from "zustand";

interface MovieQuery {
  page: number;
  genreId?: number;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setGenreId: (genreId: number) => void;
  nextPage: (currentPage: number) => void;
  prePage: (currentPage: number) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: { page: 1 },
  setGenreId: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId, page: 1 } })),
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
