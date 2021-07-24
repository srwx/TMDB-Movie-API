import React from "react"
// Custom hook
import { useHomeFetch } from "../hooks/useHomeFetch"
// Components
import HeroImage from "./HeroImage"
import Grid from "../components/Grid"
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
          <div key={movie.id}>{movie.title}</div>
        ))}
        {/* <div key={movie.id}>{movie.title}</div> เป็น array-component ลูกของ Grid */}
      </Grid>
    </>
  )
}

export default Home
