import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponseMovie } from "../entities/FetchMovie";
const apiClient = new APIClient<FetchResponseMovie>("/discover/movie");
const useMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: apiClient.getAll,
  });

export default useMovies;
