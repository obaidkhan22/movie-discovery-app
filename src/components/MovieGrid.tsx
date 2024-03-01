import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Grid from "../Common/Grid";

const MovieGrid = () => {
  const { data, isLoading } = useMovies();
  const movies = data?.results.slice(1);
  if (isLoading) return <Spinner />;

  return (
    <>
      <Grid>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      {data?.total_results! < 10 ? null : <Pagination />}
    </>
  );
};

export default MovieGrid;
