import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entities/FetchResponseMovies";
import getImageURL from "../services/getImageURL";
interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getImageURL(movie.poster_path)} />
      <CardBody>
        <Heading fontSize={20}>{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
