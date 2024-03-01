import { HStack, Image, Show, Stack } from "@chakra-ui/react";
import logo from "../images/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
import UserSignUp from "./UserSignUp";
import SearchInput from "./searchInput/SearchInput";
import GenresListDrawer from "./GenresListDrawer";
const NavBar = () => {
  return (
    <nav>
      <HStack
        justifyContent="space-between"
        paddingX={{ base: "15px", md: "10px" }}
        paddingTop={{ base: "15px" }}
      >
        <GenresListDrawer />
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <Show above="md">
          <Stack direction={"row"}>
            <DarkModeSwitch />
            <UserSignUp />
          </Stack>
        </Show>
      </HStack>
    </nav>
  );
};

export default NavBar;
