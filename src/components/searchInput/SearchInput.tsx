import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useMovieQueryStore from "../../hooks/store";

import { useNavigate } from "react-router-dom";
import "./styles.css";

const SearchInput = () => {
  const navigate = useNavigate();
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate(`/movies/${ref.current.value}`);

          ref.current.value = "";
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder={`Search movies...`}
          variant="filled"
          borderRadius={30}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
