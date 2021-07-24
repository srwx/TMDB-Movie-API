// ============================== custom hook for Home.js ==============================

import { useState, useEffect } from "react"
import API from "../API"

// อ้างอิง properties จากก้อน object ที่ TMDB-API ส่งกลับมา
const initialMoviesState = {
  page: 0,
  results: [],
  total_results: 0,
  total_pages: 0,
}

export const useHomeFetch = () => {
  const [movies, setMovies] = useState(initialMoviesState)

  // function for fetch movie from TMDB-API
  const getPopularMovies = async (page, searchKey = "") => {
    try {
      const data = await API.fetchMovies(searchKey, page)
      setMovies(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPopularMovies(1)
  }, [])

  return { movies }
}
