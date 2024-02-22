import { Heading, List, ListItem } from "@chakra-ui/react";

const SideBar = () => {
  const categories = [
    { id: 1, categoray: "Popular" },
    { id: 2, categoray: "Top Rated" },
    { id: 3, categoray: "Upcoming" },
  ];
  return (
    <>
      <Heading fontSize="medium">Categories</Heading>
      <List>
        {categories.map((c) => (
          <ListItem key={c.id}>{c.categoray}</ListItem>
        ))}
      </List>
      <Heading fontSize="medium">Genres</Heading>
    </>
  );
};

export default SideBar;
