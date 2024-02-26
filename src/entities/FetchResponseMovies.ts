import { Genre } from "./FetchResponseGenre";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  genres: Genre[];
  runtime: string;
}

export interface FetchResponseMovie {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
