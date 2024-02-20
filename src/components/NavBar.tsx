import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize={20} />
        <Text>Search Movies...</Text>
        <Text>Dark Mode</Text>
        <Text>User Account</Text>
      </HStack>
    </nav>
  );
};

export default NavBar;
