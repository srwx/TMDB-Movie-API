// ============================== custom hook for Home.js ==============================

import { useState, useEffect } from "react"
import API from "../API"
import { isPresistedState } from "../helpers"

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

  const scrollPosition = sessionStorage.getItem("scrollPosition")

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

  const handleClick = () => {
    sessionStorage.setItem("scrollPosition", window.pageYOffset)
  }

  // get movies for first landing in home page, get movies for search bar
  useEffect(() => {
    // เช็คว่ามีค่าใน sessionStorage หรือไม่ ถ้ามี ให้ดึงค่าใน sessionStorage มาเก็บใน moviesState แทน
    const sessionState = isPresistedState("homeState")
    if (sessionState && !searchTerm) {
      // ถ้าใน sessionStorage มีเก็บค่าไว้ และช่องค้นหาไม่ได้มีข้อความ ให้ดึงค่าใน session มาเก็บเป็น state แทน
      setMovies(sessionState)
      return
    }

    // ถ้าไม่มีค่าใน sessionStorage ให้ดึงข้อมูลจาก API มาเก็บเป็น state (จะทำงานตรงนี้เฉพาะครั้งแรกที่เปิดเว็ป)
    getPopularMovies(1, searchTerm)
  }, [searchTerm])

  // get movies from next page in TMDB-API when user click Load more button
  useEffect(() => {
    if (!loadMore) return

    getPopularMovies(movies.page + 1, searchTerm)
    setLoadMore(false)
  }, [loadMore])

  // Write current state (all movies that already fetch) to sessionStorage named "homeState"
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(movies)) // parameter แรก ชื่อต้องตรงกับ session ที่จะดึงมาใช้ด้วย, parameter 2 คือค่าที่จะเก็บใน session (ต้องเป็น string เท่านั้น)
  }, [movies, searchTerm])

  return {
    movies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setLoadMore,
    handleClick,
    scrollPosition,
  }
}
