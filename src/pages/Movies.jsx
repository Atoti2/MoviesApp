import React from 'react'
import Content from '../components/Content'
import { Categories } from '../components/Categories'
import { useState } from 'react'
import { useEffect } from 'react'
let urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
const movieCategory=`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`
export const Movies = () => {
  const [id, setId] = useState([])
  const [page, setPage] = useState(1)

  const [filteredUrl, setFilteredUrl] = useState(urlMovies)
  useEffect(() => {
    if(id.length > 0) {
      setFilteredUrl(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id.join(',')}`
      )
    }else{
      setFilteredUrl(urlMovies)
    }
    
  }, [id])
  useEffect(() => {
    setFilteredUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id.join(',')}&page=${page}`)
  }, [page])
  return (
    <div>
      <Categories url={movieCategory} setId={setId} queryKey="moviecategory"/>
      <Content url={filteredUrl} queryKey="movies" setPage={setPage}/>
    </div>
  )
}
