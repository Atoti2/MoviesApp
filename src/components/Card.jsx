import React from 'react'
import { img_500, og, imgUnavailable } from '../utils/api'
function Card({title, image, type, airDate, vote, id, description}) {
  return (
    <div onClick={()=>document.getElementById(id).showModal()} className="card glass bg-slate-800 text-slate-100 w-96 shadow-xl hover:scale-105 transition-all cursor-pointer">
  <figure>
      <span className='absolute right-5 top-5 bg-yellow-500 rounded-md p-1 font-bold min-w-8 text-center'>{vote}</span>
    <img
      src={image ? img_500 + image : imgUnavailable}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div>
      <p className='uppercase font-semibold '>{type}</p>
      <p className='italic mt-3'>{airDate}</p>
    </div>
  </div>
  <dialog id={id} className="modal text-slate-800">
        <div className="modal-box flex items-center flex-col">
            <h3 className="font-bold text-lg mb-5">{title}</h3>
            <img className='rounded-md w-full' src={image ? og + image : imgUnavailable} alt={title} />
            <p className='mt-5 text-justify font-mono'>{description || "There is no review of this yet."}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button></button>
        </form>
        </dialog>
</div>
)
}

export default Card