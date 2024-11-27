import React, { useState, useEffect } from 'react'
import Content from '../components/Content'

export const SearchPage = () => {
  const [search, setSearch] = useState("Arcane")
  const [page, setPage] = useState(1)
  const [searchUrl, setSearchUrl] = useState(`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=Arcane`)

  
  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSearch = () => {
    setPage(1)
    setSearchUrl(`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`);
  };
  

  useEffect(() => {
    setSearchUrl(`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${search}&page=${page}`)
  }, [page])

  
  return (
    <div className='m-5'>
      <div className='flex justify-center'>
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs text-lg mb-20" 
          value={search} 
          onChange={handleInputChange}
        />
        <button className='btn ml-3' onClick={handleSearch}>Search</button>
      </div>
      <Content url={searchUrl} queryKey="search" setPage={setPage} />
    </div>
  )
}
