import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import useSearchMovies from "../hooks/useSearchMovies";

const SearchedMovies = () => {
  const { data } = useSearchMovies();
  console.log(data);

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, "2xl": 5 }} spacing={7}>
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
      {data?.total_results! < 10 ? null : <Pagination />}
    </>
  );
};

export default SearchedMovies;
