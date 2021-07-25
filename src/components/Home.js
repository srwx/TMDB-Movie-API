import React from "react"
// Custom hook
import { useHomeFetch } from "../hooks/useHomeFetch"
// Components
import HeroImage from "./HeroImage"
import Grid from "../components/Grid"
import Thumb from "./Thumb"
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"

function Home() {
  const { movies } = useHomeFetch()
  return (
    <>
      {movies.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
          title={movies.results[0].original_title}
          text={movies.results[0].overview}
        />
      ) : null}
      <Grid>
        {movies.results.map((movie) => (
          <Thumb
            key={movie.id}
            image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
            clickable
          />
        ))}
      </Grid>
    </>
  )
}

export default Home
