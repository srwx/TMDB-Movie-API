import React from "react"
// Styles
import { Wrapper, Image } from "./Actor.styles"

function Actor({ imageUrl, name, character }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
}

export default Actor
