import APIClient from "../services/api-client";
import { FetchResponseMovie } from "../entities/FetchResponseMovies";
import getEndPoint from "../services/getEndPoint";
import useMovieQueryStore from "./store";
import { useQuery } from "@tanstack/react-query";
const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  const endpoint = getEndPoint();
  const apiClient = new APIClient<FetchResponseMovie>(endpoint);
  return useQuery({
    queryKey: ["movies", movieQuery],
    queryFn: apiClient.getAll,
  });
};
export default useMovies;
