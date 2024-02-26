import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponseCast } from "../entities/FetchResponseCast";

const useCredits = (id: string) => {
  const apiClient = new APIClient<FetchResponseCast>(`/movie/${id}/credits`);
  return useQuery({
    queryKey: ["casts", { id: id }],
    queryFn: apiClient.getAll,
  });
};

export default useCredits;
