import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useMovieQueryStore from "../hooks/store";
const SearchInput = () => {
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search movies..."
          variant="filled"
          borderRadius={30}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
