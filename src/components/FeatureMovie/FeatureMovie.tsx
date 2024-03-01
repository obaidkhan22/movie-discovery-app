import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { Movie } from "../../entities/FetchResponseMovies";
import getImageURL from "../../services/getImageURL";
import "./FeatureMovie.css";
interface Props {
  movie: Movie;
}
const FeatureMovie = ({ movie }: Props) => {
  return (
    <Card
      marginBottom={10}
      className="feature-movie-card"
      overflow="hidden"
      position="relative"
      brightness={0.7}
    >
      <img src={getImageURL(movie.backdrop_path)} height={500} width="100%" />
      <Box position="absolute" bottom={2} padding={5}>
        <Heading marginY={2}>{movie.title}</Heading>
        <Text>{movie.overview}</Text>
      </Box>
    </Card>
  );
};

export default FeatureMovie;
