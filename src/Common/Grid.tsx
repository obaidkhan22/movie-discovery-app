import { ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";
interface Props {
  children: ReactNode | ReactNode[];
}
const Grid = ({ children }: Props) => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4, "2xl": 5 }}
        spacing={7}
        padding={{ base: "15px" }}
      >
        {children}
      </SimpleGrid>
    </>
  );
};

export default Grid;
