import React from "react"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config"
// No image
import NoImage from "../../images/no_image.jpg"
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles"
// Components
import Thumb from "../Thumb"

function MovieInfo({ movie }) {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default MovieInfo
