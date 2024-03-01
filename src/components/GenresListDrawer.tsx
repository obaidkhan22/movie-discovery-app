import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { FiMenu } from "react-icons/fi";
import GenresList from "./GenresList";
import MovieCategories from "./MovieCategories";
import useMovieQueryStore from "../hooks/store";
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
        ref={menuButtonRef}
        onClick={() => setOpen(!isOpen)}
        display={{ sm: "flex", md: "none" }}
      >
        <Icon padding={2} as={FiMenu} boxSize="50px" />
      </Button>

      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={menuButtonRef}
      >
        <DrawerContent paddingX={7} overflow="scroll" overflowX="hidden">
          <MovieCategories />
          <GenresList />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenresListDrawer;
