import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortOrderSelector = () => {
  const sortOrders = [
    { value: "title.asc", label: "Title" },
    { value: "popularity.asc", label: "Popularity" },
    { value: "vote_average.desc", label: "Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem key={sortOrder.value}>{sortOrder.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrderSelector;
