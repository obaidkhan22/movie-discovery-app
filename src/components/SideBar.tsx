import GenresList from "./GenresList";
import MovieCategories from "./MovieCategories";
import { Box, Divider } from "@chakra-ui/react";

const SideBar = () => {
  return (
    <>
      <Box padding={5}>
        <MovieCategories />
        <Divider width={130} marginTop={4} marginBottom={3} />
        <GenresList />
      </Box>
    </>
  );
};

export default SideBar;
