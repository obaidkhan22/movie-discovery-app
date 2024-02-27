import { Button, HStack } from "@chakra-ui/react";
import { Movie } from "../entities/FetchResponseMovies";
import { Link } from "react-router-dom";
import { BiSolidMovie } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
interface Props {
  movie: Movie;
}
const MovieRelatedLinks = ({ movie }: Props) => {
  return (
    <HStack>
      <Button rightIcon={<BsGlobe />}>
        <Link to={movie.homepage} target="_blank">
          Website
        </Link>
      </Button>
      <Button rightIcon={<BiSolidMovie />}>
        <Link
          to={`https://www.imdb.com/title/${movie.imdb_id}`}
          target="_blank"
        >
          IMDB
        </Link>
      </Button>
    </HStack>
  );
};

export default MovieRelatedLinks;
