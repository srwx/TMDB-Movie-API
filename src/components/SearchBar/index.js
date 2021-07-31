import React, { useState, useEffect } from "react"
// Search icon
import searchIcon from "../../images/search-icon.svg"

// Styles
import { Wrapper, Content } from "./SearchBar.styles"

function SearchBar({ setSearchTerm }) {
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchString)
    }, 500)
    return () => clearTimeout(timer) // return จะทำงานก่อนจะ re-render ใหม่, ต้องดักเพราะถ้าไม่ clearTimeout() จะกลายเป็นว่าต้อง setTimeout ทุกครั้งที่ user พิมพ์
  }, [searchString, setSearchTerm])

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
