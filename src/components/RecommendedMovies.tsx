import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useRecommendedMovies from "../hooks/useRecommendedMovies";
interface Props {
  movie_id: string;
}
const RecommendedMovies = ({ movie_id }: Props) => {
  const { data } = useRecommendedMovies(movie_id);
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, "2xl": 5 }} spacing={7}>
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecommendedMovies;
