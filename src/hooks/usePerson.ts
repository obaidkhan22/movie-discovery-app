import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Person } from "../entities/FetchResponsePerson";
const usePerson = (id: string) => {
  const apiClient = new APIClient<Person>(`/person/${id}`);
  return useQuery({
    queryKey: ["person", id],
    queryFn: apiClient.getAll,
  });
};

export default usePerson;
