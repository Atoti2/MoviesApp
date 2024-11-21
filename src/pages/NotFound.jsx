import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className='text-red-600 text-center font-bold text-5xl'>404 Page not found...</div>
        <Link className='text-center flex justify-center mt-10 text-2xl font-semibold bg-orange-500 w-fit m-auto p-3 rounded-md text-slate-100' to={"/"}>Go to home</Link>
    
    </>
  )
}

export default NotFound