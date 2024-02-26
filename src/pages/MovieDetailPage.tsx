import { useParams } from "react-router-dom";
import useMovie from "./../hooks/useMovie";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useMovie(id!);
  console.log(data);
  if (data) return null;
};

export default MovieDetailPage;
