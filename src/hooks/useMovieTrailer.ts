import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponseTrailer } from "../entities/FetchResponseTrailer";

const useMovieTrailer = (id: string) => {
  const apiClient = new APIClient<FetchResponseTrailer>(`/movie/${id}/videos`);
  const int = parseInt(id);
  return useQuery({
    queryKey: ["trailer", int],
    queryFn: apiClient.getAll,
  });
};

export default useMovieTrailer;
