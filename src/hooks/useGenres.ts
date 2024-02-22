import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genre/movie/list");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

export default useGenres;
