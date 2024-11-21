import React from 'react'
import Content from '../components/Content'
import { useState } from 'react'
import { useEffect } from 'react'
export const SearchPage = () => {
  const [search, setSearch] = useState("Arcane")
  const [searchUrl, setSearchUrl] = useState(`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=Arcane`)
  const handleSearch = (event) => {
    setSearch(event.target.value)
    setSearchUrl(`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`)
  }
  
  return (
    <div className='m-5'>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={search} onChange={handleSearch}/>
      <Content url={searchUrl} queryKey="search"/>
    </div>
  )
}
