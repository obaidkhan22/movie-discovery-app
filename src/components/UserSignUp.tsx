import { Avatar, HStack, Text } from "@chakra-ui/react";

const UserSignUp = () => {
  const isAuthenticated = false;
  return (
    <HStack>
      <Text fontWeight="bold" color="gray.300">
        {isAuthenticated ? "My Movies" : "Login"}
      </Text>
      <Avatar src="https://bit.ly/code-beast" />
    </HStack>
  );
};

export default UserSignUp;
