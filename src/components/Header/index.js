import React from "react"
import { Link } from "react-router-dom"
import CustomLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import { Wrapper, Content, CustomLogoImg, TMDBLogoImg } from "./Header.styles"

function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <CustomLogoImg src={CustomLogo} alt="custom-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  )
}

export default Header
