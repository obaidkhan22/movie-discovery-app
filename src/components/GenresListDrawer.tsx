import {
  Button,
  Drawer,
  DrawerContent,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import useMovieQueryStore from "../hooks/store";
import DarkModeSwitch from "./DarkModeSwitch";
import GenresList from "./GenresList";
import MovieCategories from "./MovieCategories";
import UserSignUp from "./UserSignUp";
const GenresListDrawer = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const category = useMovieQueryStore((s) => s.movieQuery.category);
  const menuButtonRef = useRef(null);
  const { onClose } = useDisclosure();
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!isOpen);
  }, [genreId, category]);
  return (
    <>
      <Button
        boxSize={10}
        ref={menuButtonRef}
        onClick={() => setOpen(!isOpen)}
        display={{ sm: "flex", md: "none" }}
      >
        <Icon padding={2} as={FiMenu} boxSize="45px" />
      </Button>

      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={menuButtonRef}
      >
        <DrawerContent paddingX={7} overflow="scroll" overflowX="hidden">
          <HStack paddingY={3} justifyContent="space-between">
            <DarkModeSwitch />
            <UserSignUp />
          </HStack>
          <Icon
            color={"gray.400"}
            cursor="pointer"
            onClick={() => setOpen(false)}
            as={MdClose}
            marginY={5}
            boxSize={10}
            position={"absolute"}
            right={8}
            top={14}
          />

          <MovieCategories />
          <GenresList />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenresListDrawer;
