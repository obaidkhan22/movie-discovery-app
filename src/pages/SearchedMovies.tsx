import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import useSearchMovies from "../hooks/useSearchMovies";
import useMovieQueryStore from "../hooks/store";
import getCapitalizedWord from "./../services/getCapitalizedWord";
import NavBar from "../components/NavBar";
import Grid from "../Common/Grid";

const SearchedMovies = () => {
  const { data, isLoading } = useSearchMovies();
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  if (isLoading) return <Spinner />;
  console.log(data);

  return (
    <>
      <NavBar />
      <Box paddingX={3}>
        <Heading padding={4}>{getCapitalizedWord(searchText)}</Heading>
        <Grid>
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SearchedMovies;
