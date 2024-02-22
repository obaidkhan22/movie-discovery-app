import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entities/FetchResponseMovies";
import getImageURL from "../services/getImageURL";
import MovieCardContainer from "./MovieCardContainer";
interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <MovieCardContainer>
      <Card>
        <Image src={getImageURL(movie.poster_path)} />
        <CardBody>
          <Heading fontSize={24}>{movie.title}</Heading>
        </CardBody>
      </Card>
    </MovieCardContainer>
  );
};

export default MovieCard;
