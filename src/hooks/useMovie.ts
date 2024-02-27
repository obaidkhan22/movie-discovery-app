import { useQuery } from "@tanstack/react-query";
import APIClient from "./../services/api-client";
import { Movie } from "../entities/FetchResponseMovies";

const useMovie = (id: string) => {
  const apiClient = new APIClient<Movie>(`/movie/${id}&`);
  const int = parseInt(id);
  return useQuery({
    queryKey: ["movie", { id: int }],
    queryFn: apiClient.getAll,
  });
};

export default useMovie;
