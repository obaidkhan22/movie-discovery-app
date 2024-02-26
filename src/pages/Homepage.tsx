import { Grid, GridItem, Show } from "@chakra-ui/react";
import MovieGrid from "../components/MovieGrid";
import MovieHeading from "../components/MovieHeading";

import SideBar from "../components/SideBar";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <MovieHeading />
        <MovieGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
