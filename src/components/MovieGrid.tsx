import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MovieGrid = () => {
  const { data, isLoading } = useMovies();
  const movies = data?.results.slice(1);
  if (isLoading) return <Spinner />;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4, "2xl": 5 }}
        spacing={7}
        padding={{ base: "20px" }}
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
      {data?.total_results! < 10 ? null : <Pagination />}
    </>
  );
};

export default MovieGrid;
