import { Movie } from "../entities/FetchResponseMovies";
import DefinitionItem from "./DefinitionItem";
import { Heading, Text } from "@chakra-ui/react";
interface Props {
  movie: Movie;
}
const MovieAttributes = ({ movie }: Props) => {
  return (
    <>
      <DefinitionItem>
        <Heading textAlign="center" paddingY={2}>
          {`${movie.title} (${movie.release_date.split("-")[0]})`}
        </Heading>
      </DefinitionItem>
      <DefinitionItem>
        <Text>{movie.overview}</Text>
      </DefinitionItem>
    </>
  );
};

export default MovieAttributes;
