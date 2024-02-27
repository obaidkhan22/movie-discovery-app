import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponseMovie } from "../entities/FetchResponseMovies";

const useSimilarMovies = (id: string) => {
  const apiClient = new APIClient<FetchResponseMovie>(
    `/movie/${id}/recommendations`
  );
  return useQuery({
    queryKey: ["recommendedMovies", id],
    queryFn: apiClient.getAll,
  });
};

export default useSimilarMovies;
