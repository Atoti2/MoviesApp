import React from 'react'
import { useQuery } from '@tanstack/react-query'; 
import { getData } from '../utils/api';
import { useState } from 'react';

export const Categories = ({url, queryKey, setId}) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [queryKey, url],
    queryFn: getData
})
const [selectedGenres, setSelectedGenres] = useState([])
const toggleGenre = (genreId) => {
  let updatedGenres;
  if(selectedGenres.includes(genreId)){
    updatedGenres = selectedGenres.filter(id => id !== genreId)
  }else{
    updatedGenres = [...selectedGenres, genreId]
  }
  setSelectedGenres(updatedGenres)
  setId(updatedGenres)
}
if(isLoading){
    return <div><span className="loading loading-spinner loading-md"></span></div>
}
if(isError){
    return <div>Error: {error}</div>
}
console.log(data);

  return (
    <div className='flex flex-wrap items-center justify-center gap-3 mx-5 shadow-xl p-2 py-4 rounded-md my-10'>
      {data.genres.map((genre) => 
        <button key={genre.id} onClick={() => toggleGenre(genre.id)} className={`btn ${selectedGenres.includes(genre.id) ? "btn-primary" : "btn-neutral"}`}>{genre.name}</button>
      )}
    </div>
  )
}
