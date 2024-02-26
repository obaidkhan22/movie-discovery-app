import { useParams } from "react-router-dom";
import useMovie from "./../hooks/useMovie";
import MovieAttributes from "../components/MovieAttributes";
import { SimpleGrid, Image, Box, Spinner } from "@chakra-ui/react";
import getImageURL from "../services/getImageURL";
import MovieTopCasts from "../components/MovieTopCasts";

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
        </Box>
      </SimpleGrid>
    </>
  ) : null;
};

export default MovieDetailPage;
