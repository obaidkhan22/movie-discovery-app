import { useParams } from "react-router-dom";
import useMovie from "./../hooks/useMovie";
import MovieAttributes from "../components/MovieAttributes";
import { SimpleGrid, Image, Box } from "@chakra-ui/react";
import getImageURL from "../services/getImageURL";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useMovie(id!);
  console.log(data);
  if (data)
    return (
      <>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          templateColumns={{
            base: "1fr",
            lg: "400px 1fr",
          }}
        >
          <Image
            src={getImageURL(data.poster_path)}
            borderRadius={20}
            marginLeft={10}
            boxShadow="dark-lg"
            height={500}
          />
          <Box justifySelf={"center"}>
            <MovieAttributes movie={data} />
          </Box>
        </SimpleGrid>
      </>
    );
};

export default MovieDetailPage;
