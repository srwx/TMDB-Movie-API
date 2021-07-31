import { useState, useEffect } from "react"
import API from "../API"

export const useMovieFetch = (movieId) => {
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // useEffect() จะทำงานหลังคำสั่ง return ของฟังก์ชันนี้
  useEffect(() => {
    const getMovie = async (movieId) => {
      try {
        const res = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        setMovie({
          ...res,
          actors: credits.cast,
        })
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }
    }

    getMovie(movieId)
  }, [movieId])

  return { movie, loading, error } // ใน Movie.js เรียกใช้ฟังก์ชันไฟล์นี้ โปรแกรมจะ return ค่าเริ่มต้นของ state 2 ตัวนี้ก่อน ค่อยย้อนกลับไปทำ useEffect (useEffect ทำงานหลัง return)
}
