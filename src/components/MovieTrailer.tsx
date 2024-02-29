import { useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { AspectRatio, HStack } from "@chakra-ui/react";

const MovieTrailer = () => {
  const { id } = useParams();
  const { data } = useMovieTrailer(id!);
  return (
    <HStack
      justifyContent="center"
      marginY={7}
      overflow="hidden"
      borderRadius={20}
    >
      <AspectRatio width="90%">
        <iframe
          src={`https://www.youtube.com/embed/${
            data?.results[0] ? data.results[0].key : ""
          }`}
          allowFullScreen
        />
      </AspectRatio>
    </HStack>
  );
};

export default MovieTrailer;
