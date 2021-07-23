import React from "react"
import CustomLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import { Wrapper, Content, CustomLogoImg, TMDBLogoImg } from "./Header.styles"

function Header() {
  return (
    <Wrapper>
      <Content>
        <CustomLogoImg src={CustomLogo} alt="custom-logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  )
}

export default Header
