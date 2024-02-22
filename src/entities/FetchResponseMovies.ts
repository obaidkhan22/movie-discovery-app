interface Movie {
  id: number;
  title: string;
}

export interface FetchResponseMovie {
  page: number;
  results: Movie[];
}
