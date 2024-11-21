import React from 'react'
import Content from '../components/Content'
import { Categories } from '../components/Categories'
import { useState } from 'react'
import { useEffect } from 'react'
let urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
const movieCategory=`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`
export const Movies = () => {
  const [id, setId] = useState("")
  useEffect(() => {
    urlMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id}`
  }, [id])
  return (
    <div>
      <Categories url={movieCategory} setId={setId} queryKey="moviecategory"/>
      <Content url={urlMovies} queryKey="movies"/>
    </div>
  )
}
