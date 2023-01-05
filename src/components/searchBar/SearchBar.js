import React from 'react'
import { Form } from '../../globalStyles'
import { SearchBarWrapper } from './SearchBar.styled'
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <Form>
            <SearchBarWrapper>
                <FiSearch
                    style={{
                        top: "auto",
                        color: "#C4C4C4",
                    }}
                />
                <input
                    placeholder="Search"
                ></input>
            </SearchBarWrapper>
        </Form>
    )
}

export default SearchBar