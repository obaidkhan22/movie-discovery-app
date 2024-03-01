import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import FeatureMovie from "./FeatureMovie/FeatureMovie";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();
  const movies = data?.results.slice(1);
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, "2xl": 5 }} spacing={7}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
      {data?.total_results! < 10 ? null : <Pagination />}
    </>
  );
};

export default MovieGrid;
