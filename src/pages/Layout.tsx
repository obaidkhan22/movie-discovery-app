import { Grid, GridItem, Show } from "@chakra-ui/react";

import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: ` "nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "180px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show breakpoint="(min-width: 768px)">
          <GridItem area="aside">
            <SideBar />
          </GridItem>
        </Show>
        <GridItem area="main" padding={5}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
