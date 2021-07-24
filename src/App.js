import React from "react"
// Components
import Header from "./components/Header"
import Home from "./components/Home"
// Global style
import { GlobalStyle } from "./GlobalStyle"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  )
}

export default App
