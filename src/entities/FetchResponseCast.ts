export interface Cast {
  id: number;
  name: string;
  profile_path: string;
}

export interface FetchResponseCast {
  id: string;
  cast: Cast[];
}
