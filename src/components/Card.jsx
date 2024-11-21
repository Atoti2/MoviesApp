import React from 'react'

function Card({title, image, type, airDate}) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 transition-all cursor-pointer">
  <figure>
    <img
      src={`https://image.tmdb.org/t/p/w500` + image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className='ml-auto font-mono'>
      <p className='uppercase font-semibold justify-end flex'>{type}</p>
      <p className='italic'>{airDate}</p>

    </div>
  </div>
</div>
)
}

export default Card