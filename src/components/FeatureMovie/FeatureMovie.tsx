import { Box, Card, Image } from "@chakra-ui/react";
import { Movie } from "../../entities/FetchResponseMovies";
import getImageURL from "../../services/getImageURL";
import "./FeatureMovie.css";
interface Props {
  movie: Movie;
}
const FeatureMovie = ({ movie }: Props) => {
  return (
    <Card overflow="hidden" className="feature-movie-img">
      <Box>
        <Image
          backgroundBlendMode="darken"
          borderRadius={10}
          src={getImageURL(movie.backdrop_path)}
          height={500}
          width="100%"
        />
      </Box>
    </Card>
  );
};

export default FeatureMovie;
