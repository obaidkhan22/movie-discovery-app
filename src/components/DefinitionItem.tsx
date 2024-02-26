import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode;
}
const DefinitionItem = ({ children, term }: Props) => {
  return (
    <Box marginY={3}>
      <Heading as="dt" color="gray.600" fontSize={20}>
        {term}
      </Heading>
      {children}
    </Box>
  );
};

export default DefinitionItem;
