import { HStack, Image, Stack } from "@chakra-ui/react";
import logo from "../images/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
import UserSignUp from "./UserSignUp";
import SearchInput from "./searchInput/SearchInput";
import GenresListDrawer from "./GenresListDrawer";
const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent="space-between" padding={2}>
        <GenresListDrawer />
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <Stack direction={"row"}>
          <DarkModeSwitch />
          <UserSignUp />
        </Stack>
      </HStack>
    </nav>
  );
};

export default NavBar;
