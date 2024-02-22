import { Heading, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  console.log(data);

  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {data?.genres.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
