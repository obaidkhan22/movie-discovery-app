import { HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";

import genres from "../data/genres";
const GenresList = () => {
  return (
    <>
      <Heading fontSize={24}>Genres</Heading>
      <List>
        {genres.genres.map((genre) => (
          <HStack marginY={2}>
            <Image
              src={genre.image_background}
              boxSize={10}
              borderRadius={10}
              objectFit="cover"
            />
            <ListItem fontSize="17px" key={genre.id}>
              {genre.name}
            </ListItem>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenresList;
