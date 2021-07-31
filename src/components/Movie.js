import React from "react"
import { useParams } from "react-router-dom"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config"

// Hook
import { useMovieFetch } from "../hooks/useMovieFetch"

// No image
import NoImage from "../images/no_image.jpg"

// Components
import Grid from "./Grid"
import MovieInfo from "./MovieInfo"
import Actor from "./Actor"
import Spinner from "./Spinner"

function Movie() {
  const { id } = useParams()
  const { movie, loading, error } = useMovieFetch(id)

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <MovieInfo movie={movie} />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  )
}

export default Movie
