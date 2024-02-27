import { useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieTrailer = () => {
  const { id } = useParams();
  const { data } = useMovieTrailer(id!);
  const url = `https://www.youtube.com/embed/${data?.results[0].key}`;

  return <iframe src={url}></iframe>;
};

export default MovieTrailer;
