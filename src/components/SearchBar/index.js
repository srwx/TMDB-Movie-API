import React, { useState, useEffect, useRef } from "react"
// Search icon
import searchIcon from "../../images/search-icon.svg"

// Styles
import { Wrapper, Content } from "./SearchBar.styles"

function SearchBar({ setSearchTerm }) {
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    setSearchTerm(searchString)
  }, [searchString])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={(event) => setSearchString(event.target.value)}
          value={searchString}
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar
