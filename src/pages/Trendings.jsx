import React from 'react'
import Card from '../components/Card'
import { getAllTrending } from '../utils/api'
import { useQuery } from '@tanstack/react-query'; 

const fetchTrending = async () => {
    const response = await getAllTrending();
    console.log(response);
    
    return response.results
  };

export const Trendings = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['trendings'], 
        queryFn: fetchTrending
      });
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
  return (
    <div>
        <div className='flex flex-wrap gap-8 m-5 justify-center'>
            {data?.map((item) => (
                <Card key={item.id} title={item.title || item.name} image={item.poster_path} type={item.media_type} airDate={item.first_air_date || item.release_date}/> 
            ))}

        </div>
    </div>
  )
}
