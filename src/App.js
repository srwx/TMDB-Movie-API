import React from "react"
// Global style
import { GlobalStyle } from "./GlobalStyle"
// Router
import { Switch, Route } from "react-router-dom"
// Components
import Header from "./components/Header"
import Home from "./components/Home"
import Movie from "./components/Movie"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  )
}

export default App
