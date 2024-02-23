import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MovieGrid from "./components/MovieGrid";
import Pagination from "./components/Pagination";

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
      <GridItem area="main">
        <MovieGrid />
        <Pagination />
      </GridItem>
    </Grid>
  );
}

export default App;
