import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import useSearchMovies from "../hooks/useSearchMovies";
import useMovieQueryStore from "../hooks/store";
import getCapitalizedWord from "./../services/getCapitalizedWord";
import NavBar from "../components/NavBar";

const SearchedMovies = () => {
  const { data, isLoading } = useSearchMovies();
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  if (isLoading) return <Spinner />;
  console.log(data);

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading paddingBottom={8}>{getCapitalizedWord(searchText)}</Heading>
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, "2xl": 5 }} spacing={7}>
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default SearchedMovies;
