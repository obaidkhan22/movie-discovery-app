import { Heading, List, ListItem } from "@chakra-ui/react";

const categories = [
  { id: 1, categoray: "Popular" },
  { id: 2, categoray: "Top Rated" },
  { id: 3, categoray: "Upcoming" },
];
const MovieCategories = () => {
  return (
    <>
      <Heading fontSize={24} marginY={2}>
        Categories
      </Heading>
      <List>
        {categories.map((c) => (
          <ListItem marginY="6px" key={c.id} fontSize="17px">
            {c.categoray}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MovieCategories;
