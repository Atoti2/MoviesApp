import { useQuery } from '@tanstack/react-query';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getData, noPicture } from '../utils/api';
import { img_300 } from '../utils/api';

export const Carousel = ({id, media_type}) => {
    const urlCredits = `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
    const {data, isError, isLoading, error} = useQuery({queryKey: ["credits", urlCredits], queryFn: getData})
    if(isLoading){
        return <div><span className="loading loading-spinner loading-md"></span></div>
    }
    if(isError){
        return <div>Error: {error}</div>
    }
    
    
    

  return (    
    <div className="flex w-full overflow-x-scroll space-x-4">
      {data.cast.map((person) => (
        <div className="flex-shrink-0">
          <img
            className="w-60 h-60 object-cover rounded-md"
            src={person.profile_path ? img_300 + person.profile_path : noPicture}
            alt={person.name}
          />
          <b>{person.name}</b>
        </div>
      ))}
    </div>      
  )
}
