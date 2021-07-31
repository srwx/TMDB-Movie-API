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
  const [movies, setMovies] = useState(initialMoviesState) // used for <HeroImage />, <Grid /> in Home.js
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState("") // used for <Searchbar /> in Home.js
  const [loadMore, setLoadMore] = useState(false) // state for callback fn. in <Button /> (for loading more movie when click Load more button.)

  // function for fetch movie from TMDB-API
  const getPopularMovies = async (page, searchKey) => {
    try {
      setLoading(true)
      const data = await API.fetchMovies(searchKey, page)
      setMovies((prev) => ({
        ...data,
        results:
          data.page > 1 ? [...prev.results, ...data.results] : data.results,
      }))
      setLoading(false)
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  // get movies for first landing in home page, get movies for search bar
  useEffect(() => {
    getPopularMovies(1, searchTerm)
  }, [searchTerm])

  // get movies from next page in TMDB-API when user click Load more button
  useEffect(() => {
    if (!loadMore) return

    getPopularMovies(movies.page + 1, searchTerm)
    setLoadMore(false)
  }, [loadMore])

  return { movies, loading, error, searchTerm, setSearchTerm, setLoadMore }
}
