import { Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize={24}>Genres</Heading>
      <List>
        {data?.genres.map((genre) => (
          <ListItem marginY="6px" fontSize="17px" key={genre.id}>
            {genre.name}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
