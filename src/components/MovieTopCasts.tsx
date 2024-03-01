import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import useCredits from "../hooks/useCredits";
import getImageURL from "../services/getImageURL";
import React from "react";
import { Link } from "react-router-dom";
interface Props {
  movie_id: string;
}
const MovieTopCasts = ({ movie_id }: Props) => {
  const { data, error } = useCredits(movie_id!);
  const slicedArray = data?.cast.slice(0, 6);
  if (error) return null;
  return (
    <Box>
      <Heading color="gray.600" fontSize={20} marginTop={2}>
        Top Casts
      </Heading>
      <Grid templateColumns="repeat(6,  1fr)" paddingY={3}>
        {slicedArray?.map((cast) => (
          <React.Fragment key={cast.id}>
            {cast.profile_path && (
              <GridItem justifySelf="start">
                <VStack>
                  <Link to={`/person/${cast.id}`}>
                    <Avatar
                      src={getImageURL(cast.profile_path)}
                      size="lg"
                      objectFit={"cover"}
                    />
                  </Link>
                  <Text textAlign="center" whiteSpace="wrap">
                    {cast.name}
                  </Text>
                </VStack>
              </GridItem>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieTopCasts;
