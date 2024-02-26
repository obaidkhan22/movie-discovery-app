import { Movie } from "../entities/FetchResponseMovies";
import { HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import getDurationByHour from "../services/getDurationByHour";
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
      <SimpleGrid columns={4}>
        <DefinitionItem term="Genres">
          {movie.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Duration">
          <Text>{getDurationByHour(movie.runtime)}</Text>
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default MovieAttributes;
