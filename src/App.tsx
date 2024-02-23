import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MovieGrid from "./components/MovieGrid";
import MovieHeading from "./components/MovieHeading";
import SortOrderSelector from "./components/SortOrderSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <HStack justifyContent="space-between" marginBottom={4}>
          <MovieHeading />
          <SortOrderSelector />
        </HStack>
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
