import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
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
          <HStack>
            <Image
              boxSize={10}
              marginY={1}
              borderRadius={10}
              objectFit="cover"
              src="https://static.vecteezy.com/system/resources/thumbnails/028/274/915/small/strong-athletic-male-fighter-view-from-the-back-photo.jpg"
            />
            <ListItem marginY="6px" fontSize="17px" key={genre.id}>
              {genre.name}
            </ListItem>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenresList;
