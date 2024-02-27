import { Heading } from "@chakra-ui/react";
import useMovieQueryStore from "../hooks/store";
import useGenre from "../hooks/useGenre";
import getCapitalizedWord from "../services/getCapitalizedWord";

const MovieHeading = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  const selectedGenre = useGenre(movieQuery.genreId);
  const category = useMovieQueryStore((s) => s.movieQuery.category);
  const capitalizedWord = getCapitalizedWord(movieQuery.searchText || category);
  return (
    <Heading color="gray.400" marginBottom={5}>{`${selectedGenre?.name || ""} ${
      capitalizedWord || "Movies"
    }`}</Heading>
  );
};

export default MovieHeading;
