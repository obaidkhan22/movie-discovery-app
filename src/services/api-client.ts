import axios from "axios";
interface FetchResponse<T> {
  genres: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "843b900cd6d0d6a455069c8d441f279a",
  },
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint)
      .then((res) => res.data);
  };
}

export default APIClient;
