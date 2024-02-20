import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red">
        Navbar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="coral">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
