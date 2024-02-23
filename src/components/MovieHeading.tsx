import { Heading } from "@chakra-ui/react";
import useMovieQueryStore from "../hooks/store";
import useGenre from "../hooks/useGenre";

const MovieHeading = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const selectedGenre = useGenre(genreId);
  return (
    <Heading color="gray.400">{`${selectedGenre?.name || ""} Movies`}</Heading>
  );
};

export default MovieHeading;
