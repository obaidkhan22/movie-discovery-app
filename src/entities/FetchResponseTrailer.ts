interface Trailer {
  key: string;
  name: string;
}
export interface FetchResponseTrailer {
  id: number;
  results: Trailer[];
}
