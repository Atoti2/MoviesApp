import React from 'react'
import Card from '../components/Card'
import Content from '../components/Content';
import { useState } from 'react';
import { useEffect } from 'react';

export const Trendings = () => {
  const [page, setPage] = useState(1)
  
  const urlTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
  const [filteredUrl, setFilteredUrl] = useState(urlTrending)
  useEffect(() => {
    setFilteredUrl(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`)
  }, [page])
  return (
    <div>
      <Content url={filteredUrl} queryKey="trendings" setPage={setPage}/>
       
    </div>
  )
}
