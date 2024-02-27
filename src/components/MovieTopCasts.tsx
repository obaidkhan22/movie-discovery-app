import {
  Avatar,
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import useCredits from "../hooks/useCredits";
import getImageURL from "../services/getImageURL";
import React from "react";
interface Props {
  movie_id: number;
}
const MovieTopCasts = ({ movie_id }: Props) => {
  const { data, error } = useCredits(movie_id!);
  const slicedArray = data?.cast.slice(0, 10);
  if (error) return null;
  return (
    <Box>
      <Heading color="gray.600" fontSize={20} marginTop={2}>
        Top Casts
      </Heading>
      <SimpleGrid
        columns={{ base: 4, sm: 6, md: 8, lg: 6, xl: 9 }}
        paddingY={5}
        spacing={2}
      >
        {slicedArray?.map((cast) => (
          <React.Fragment key={cast.id}>
            {cast.profile_path && (
              <VStack marginX={3}>
                <Avatar
                  src={getImageURL(cast.profile_path)}
                  size="lg"
                  objectFit={"cover"}
                />
                <Text textAlign="center">{cast.name}</Text>
              </VStack>
            )}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MovieTopCasts;
