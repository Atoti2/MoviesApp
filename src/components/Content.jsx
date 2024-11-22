import React from 'react'
import { useQuery } from '@tanstack/react-query'; 
import { getData } from '../utils/api';
import Card from './Card';
const Content = ({url, queryKey, setPage}) => {
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
    
    
  return (
    <>
    <div className='flex flex-wrap gap-8 m-5 justify-center '>
            {data.results?.map((item) => (
                <Card key={item.id} id={item.id} description={item.overview || item.description} vote={item.vote_average} title={item.title || item.name} image={item.poster_path} type={item.media_type} airDate={item.first_air_date || item.release_date}/> 
            ))}
    </div>
            <div className='flex gap-5 justify-center my-10'>
                <button onClick={(page) => setPage(page > 0 ? page - 1 : 1)}  className='btn'>Previous page</button>
                <button 
                    onClick={() => setPage(prevPage => (prevPage < data.total_pages ? prevPage + 1 : data.total_pages))}
                    className='btn'>
                    Next page
                </button>
            </div>
</>
  )
}

export default Content