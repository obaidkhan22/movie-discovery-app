import { Button, HStack } from "@chakra-ui/react";
import { Movie } from "../entities/FetchResponseMovies";
import { Link } from "react-router-dom";
interface Props {
  movie: Movie;
}
const MovieRelatedLinks = ({ movie }: Props) => {
  return (
    <HStack>
      <Button>
        <Link to={movie.homepage} target="_blank">
          Website
        </Link>
      </Button>
      <Button>
        <Link
          to={`https://www.imdb.com/title/${movie.imdb_id}`}
          target="_blank"
        >
          IMDB
        </Link>
      </Button>
      <Button>
        <Link to={`/`}>Go back</Link>
      </Button>
    </HStack>
  );
};

export default MovieRelatedLinks;
