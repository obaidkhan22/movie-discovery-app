export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface FetchResponseMovie {
  page: number;
  results: Movie[];
  total_pages: number;
}
