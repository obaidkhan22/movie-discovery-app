import { Button, HStack, Text } from "@chakra-ui/react";
import useMovieQueryStore from "../hooks/store";
import useMovies from "../hooks/useMovies";

const Pagination = () => {
  const { data } = useMovies();
  const total_pages = data?.total_pages;
  const setNext = useMovieQueryStore((s) => s.nextPage);
  const setPre = useMovieQueryStore((s) => s.prePage);
  const page = useMovieQueryStore((s) => s.movieQuery.page);
  if (total_pages === 1) return null;
  return (
    <HStack justifyContent="center" padding={5}>
      {page >= 2 && <Button onClick={() => setPre(page)}>Pre</Button>}
      <Text fontWeight="bold" fontSize={20} marginX={2}>
        {page}
      </Text>
      {<Button onClick={() => setNext(page)}>Next</Button>}
    </HStack>
  );
};

export default Pagination;
