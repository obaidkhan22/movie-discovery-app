import { Box, Card, Heading, Text, Image } from "@chakra-ui/react";
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
      brightness={0.7}
    >
      <Image
        src={getImageURL(movie.backdrop_path)}
        height={{ md: "300px", lg: "500px", xl: "600px", "2xl": "780px" }}
      />
      <Box position="absolute" bottom={2} padding={5}>
        <Heading marginY={2}>{movie.title}</Heading>
        <Text display={{ base: "none", sm: "block" }}>{movie.overview}</Text>
      </Box>
    </Card>
  );
};

export default FeatureMovie;
