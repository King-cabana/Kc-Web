import React, { useEffect, useRef, useState } from "react";
import { Form } from "../../globalStyles";
import { SearchBarWrapper } from "./SearchBar.styled";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const refNol = useRef();
  // console.log(.value)
  useEffect(() => {
    console.log()
  },[refNol.current?.value]);

  return (
    <Form>
      <SearchBarWrapper>
        <FiSearch
          style={{
            top: "auto",
            color: "#C4C4C4",
          }}
        />
        <input placeholder="Search" ref={refNol}></input>
      </SearchBarWrapper>
    </Form>
  );
};

export default SearchBar;
