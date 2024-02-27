import { useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { AspectRatio, HStack } from "@chakra-ui/react";

const MovieTrailer = () => {
  const { id } = useParams();
  const { data } = useMovieTrailer(id!);
  const url = `https://www.youtube.com/embed/${data?.results[0].key}`;
  return (
    <HStack
      justifyContent="center"
      marginY={7}
      overflow="hidden"
      borderRadius={20}
    >
      <AspectRatio width="90%">
        <iframe src={url} allowFullScreen />
      </AspectRatio>
    </HStack>
  );
};

export default MovieTrailer;
