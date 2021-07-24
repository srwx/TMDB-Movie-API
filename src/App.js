import React from "react"
// import components
import Header from "./components/Header"
import Home from "./components/Home"

// import global-style
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
