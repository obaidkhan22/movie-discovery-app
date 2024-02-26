import {
  Avatar,
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useCredits from "../hooks/useCredits";
import getImageURL from "../services/getImageURL";
import React from "react";

const MovieTopCasts = () => {
  const { id } = useParams();
  const { data, error } = useCredits(id!);
  const slicedArray = data?.cast.slice(0, 10);

  if (error) return null;
  return (
    <Box>
      <Heading color="gray.600" fontSize={20} marginTop={2}>
        Top Casts
      </Heading>
      <SimpleGrid columns={8} paddingY={5}>
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
