import { Button, Heading, Link, List, ListItem } from "@chakra-ui/react";
import useMovieQueryStore from "../hooks/store";

const categories = [
  { value: "popular", categoray: "Popular" },
  { value: "top_rated", categoray: "Top Rated" },
  { value: "upcoming", categoray: "Upcoming" },
];
const MovieCategories = () => {
  const setCategory = useMovieQueryStore((s) => s.setCategory);
  const category = useMovieQueryStore((s) => s.movieQuery.category);
  const selectedCategory = categories.find((c) => c.value === category);
  return (
    <>
      <Heading fontSize={24} marginY={2} color="gray.400">
        Categories
      </Heading>
      <List>
        {categories.map((c) => (
          <ListItem marginY="6px" key={c.value} fontSize="17px">
            <Link
              fontWeight={
                selectedCategory?.value === c.value ? "bold" : "normal"
              }
              onClick={() => setCategory(c.value)}
            >
              {c.categoray}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MovieCategories;
