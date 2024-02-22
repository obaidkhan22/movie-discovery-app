import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponseGenre } from "../entities/FetchResponseGenre";
const apiClient = new APIClient<FetchResponseGenre>("/genre/movie/list");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

export default useGenres;
