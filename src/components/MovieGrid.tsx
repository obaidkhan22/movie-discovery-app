import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();
  if (isLoading) return <Spinner />;
  if (error) return null;
  console.log(data);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
        spacing={7}
        padding={5}
      >
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
