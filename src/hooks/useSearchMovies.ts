import useMovieQueryStore from "./store";
import APIClient from "../services/api-client";
import { FetchResponseMovie } from "../entities/FetchResponseMovies";
import { useQuery } from "@tanstack/react-query";

const useSearchMovies = () => {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  const page = useMovieQueryStore((s) => s.movieQuery.page);
  const apiClient = new APIClient<FetchResponseMovie>(
    `/search/movie?query=${searchText}&page=${page}&`
  );

  return useQuery({
    queryKey: ["movies", searchText],
    queryFn: apiClient.getAll,
  });
};

export default useSearchMovies;
