import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponseMovie } from "../entities/FetchResponseMovies";
import useMovieQueryStore from "./store";
const useMovies = () => {
  const page = useMovieQueryStore((s) => s.movieQuery.page);
  console.log(page);

  const apiClient = new APIClient<FetchResponseMovie>(
    `/discover/movie?page=${page}`
  );
  return useQuery({
    queryKey: ["movies", page],
    queryFn: apiClient.getAll,
  });
};
export default useMovies;
