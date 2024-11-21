import React from 'react'
import Card from '../components/Card'
import Content from '../components/Content';
const urlTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`

export const Trendings = () => {

  return (
    <div>
      <Content url={urlTrending} queryKey="trendings"/>
       
    </div>
  )
}
