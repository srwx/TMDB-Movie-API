import React from "react"

// Custom hook
import { useHomeFetch } from "../hooks/useHomeFetch"

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"

// Components
import HeroImage from "./HeroImage"
import Grid from "./Grid"
import Thumb from "./Thumb"
import Spinner from "./Spinner"
import SearchBar from "./SearchBar"
import Button from "./Button"

function Home() {
  const { movies, loading, error, searchTerm, setSearchTerm, setLoadMore } =
    useHomeFetch()

  if (error) return <div>Error, can't get data from TMDB API</div>

  console.log(movies)

  return (
    <>
      {!searchTerm && movies.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
          title={movies.results[0].original_title}
          text={movies.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search results : " : "Popular movies : "}>
        {movies.results.map((movie) => (
          <Thumb
            key={movie.id}
            image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
            movieid={movie.id}
            clickable
          />
        ))}
      </Grid>
      {loading ? (
        <Spinner />
      ) : (
        <Button text="Load more" callback={() => setLoadMore(true)} />
      )}
    </>
  )
}

export default Home
