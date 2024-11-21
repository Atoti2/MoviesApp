import React from 'react'
import Content from '../components/Content'
import { Categories } from '../components/Categories'
import { useState } from 'react'
import { useEffect } from 'react'
let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`
const seriesCategory=`https://api.themoviedb.org/3/genre/tv/list?api_key=${import.meta.env.VITE_API_KEY}`
export const TVSeries = () => {
  const [id, setId] = useState("")
  useEffect(() => {
    urlSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id}`
  }, [id])

  return (
    <div>
      <Categories url={seriesCategory} queryKey="seriescategory" setId={setId}/>
      <Content url={urlSeries} queryKey="series"/>
    </div>
  )
}
