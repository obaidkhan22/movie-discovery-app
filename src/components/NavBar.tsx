import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
import UserSignUp from "./UserSignUp";
const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent="space-between" padding={2}>
        <Image src={logo} boxSize="60px" />
        <Text>Search Movies...</Text>
        <Stack direction={"row"}>
          <DarkModeSwitch />
          <UserSignUp />
        </Stack>
      </HStack>
    </nav>
  );
};

export default NavBar;
