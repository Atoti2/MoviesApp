import React from 'react'
import Content from '../components/Content'
import { Categories } from '../components/Categories'
import { useState } from 'react'
import { useEffect } from 'react'
let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`
const seriesCategory=`https://api.themoviedb.org/3/genre/tv/list?api_key=${import.meta.env.VITE_API_KEY}`
export const TVSeries = () => {
  const [id, setId] = useState([])
  const [filteredUrl, setFilteredUrl] = useState(urlSeries)
  const [page, setPage] = useState(1)

  useEffect(() => {
    if(id.length > 0) {
      setFilteredUrl(
        `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id.join(',')}`
      )
    }else{
      setFilteredUrl(urlSeries)
    }
  }, [id])
  useEffect(() => {
    setFilteredUrl(`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id.join(',')}&page=${page}`)
  }, [page])


  return (
    <div>
      <Categories url={seriesCategory} queryKey="seriescategory" setId={setId}/>
      <Content url={filteredUrl} queryKey="series" setPage={setPage}/>
    </div>
  )
}
