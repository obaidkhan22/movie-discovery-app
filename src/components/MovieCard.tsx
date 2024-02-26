import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entities/FetchResponseMovies";
import getImageURL from "../services/getImageURL";
import MovieRating from "./MovieRating";
import { Link } from "react-router-dom";
interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.07)",
        transition: "transform .2s ease-in",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={getImageURL(movie.poster_path)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading fontSize={20}>
            <Link to={`/movie/${movie.id} ${window.scrollTo(0, 0)}`}>
              {movie.title}
            </Link>
          </Heading>
          <MovieRating rating={movie.vote_average.toFixed(2)} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
