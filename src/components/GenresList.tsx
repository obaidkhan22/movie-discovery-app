import { HStack, Heading, Image, Link, List, ListItem } from "@chakra-ui/react";
import genres from "../data/genres";
import useMovieQueryStore from "../hooks/store";
import useGenre from "../hooks/useGenre";
const GenresList = () => {
  const setGenreId = useMovieQueryStore((s) => s.setGenreId);
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const selectedGenre = useGenre(genreId);
  return (
    <>
      <Heading fontSize={24}>Genres</Heading>
      <List>
        {genres.map((genre) => (
          <HStack marginY={2}>
            <Image
              src={genre.image_background}
              boxSize={10}
              borderRadius={10}
              objectFit="cover"
            />
            <ListItem
              fontSize="17px"
              key={genre.id}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              color={selectedGenre?.id === genre.id ? "gray.400" : ""}
            >
              <Link onClick={() => setGenreId(genre.id)}>{genre.name}</Link>
            </ListItem>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenresList;
