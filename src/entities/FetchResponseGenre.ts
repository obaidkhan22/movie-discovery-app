interface Genre {
  id: number;
  name: string;
}

export interface FetchResponseGenre {
  genres: Genre[];
}
