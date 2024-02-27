interface Trailer {
  key: string;
}
export interface FetchResponseTrailer {
  id: number;
  results: Trailer[];
}
