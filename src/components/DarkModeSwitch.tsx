import { Button, HStack, Icon, useColorMode, Text } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightMode = (
    <HStack>
      <Text>Light Mode</Text>
      <Icon as={BsSun} />
    </HStack>
  );
  const darkMode = (
    <HStack>
      <Text>Dark Mode</Text>
      <Icon as={BsMoon} />
    </HStack>
  );
  return (
    <Button onClick={toggleColorMode} fontWeight="bold" borderRadius={20}>
      {colorMode === "dark" ? lightMode : darkMode}
    </Button>
  );
};

export default DarkModeSwitch;
