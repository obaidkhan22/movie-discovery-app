export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface FetchResponseMovie {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
