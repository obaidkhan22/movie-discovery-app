import { Movie } from "../entities/FetchResponseMovies";
import { Heading, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
interface Props {
  movie: Movie;
}
const MovieAttributes = ({ movie }: Props) => {
  return (
    <>
      <Heading textAlign="center" paddingY={2}>
        {`${movie.title} (${movie.release_date.split("-")[0]})`}
      </Heading>
      <Text>{movie.overview}</Text>
      <DefinitionItem term="Genres">
        {movie.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Duration">
        <Text>{movie.runtime} min</Text>
      </DefinitionItem>
    </>
  );
};

export default MovieAttributes;
