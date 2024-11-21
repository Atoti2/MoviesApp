import React from 'react'
import { useQuery } from '@tanstack/react-query'; 
import { getData } from '../utils/api';

export const Categories = ({url, queryKey, setId}) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [queryKey, url],
    queryFn: getData
})
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
        <button key={genre.id} onClick={() => setId(genre.id)} className="btn btn-neutral">{genre.name}</button>
      )}
    </div>
  )
}
