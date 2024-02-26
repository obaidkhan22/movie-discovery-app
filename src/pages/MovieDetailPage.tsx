import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovie from "./../hooks/useMovie";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useMovie(id!);
  console.log(data);

  return <Heading>{data?.title}</Heading>;
};

export default MovieDetailPage;
