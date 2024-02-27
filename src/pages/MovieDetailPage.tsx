import { useParams } from "react-router-dom";
import useMovie from "./../hooks/useMovie";
import MovieAttributes from "../components/MovieAttributes";
import { SimpleGrid, Image, Box, Spinner, Heading } from "@chakra-ui/react";
import getImageURL from "../services/getImageURL";
import MovieTopCasts from "../components/MovieTopCasts";
import MovieRelatedLinks from "../components/MovieRelatedLinks";
import RecommendedMovies from "../components/RecommendedMovies";
import MovieTrailer from "../components/MovieTrailer";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovie(id!);
  if (isLoading) return <Spinner />;
  return data ? (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2 }}
        templateColumns={{
          base: "1fr",
          md: "1fr",
          lg: "400px 1fr",
        }}
      >
        <Box justifySelf="center">
          <Image
            src={getImageURL(data.poster_path)}
            borderRadius={20}
            boxShadow="dark-lg"
            height={500}
          />
        </Box>
        <Box justifySelf={"center"}>
          <MovieAttributes movie={data} />
          <MovieTopCasts movie_id={data.id} />
          <MovieRelatedLinks movie={data} />
        </Box>
        <MovieTrailer />
      </SimpleGrid>
      <Box>
        <Heading marginY={7} textAlign="center">
          You Might Also Like
        </Heading>
        <RecommendedMovies movie_id={id!} />
      </Box>
    </>
  ) : null;
};

export default MovieDetailPage;
