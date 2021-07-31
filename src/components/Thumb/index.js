import React from "react"
import { Link } from "react-router-dom"
// Styles
import { Image } from "./Thumb.styles"

function Thumb({ image, movieid, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/movie/${movieid}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  )
}

export default Thumb
