import React from 'react';
import { img_500, imgUnavailable, getData } from '../utils/api';
import { useQuery } from '@tanstack/react-query';
import { Modal } from './Modal';

function Card({ title, image, type, airDate, vote, id, description }) {
  const urlDetails = `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
  const urlVideos = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['details', urlDetails],
    queryFn: getData,
  });

  const {
    data: dataVideos,
    isLoading: isLoadingVideos,
    isError: isErrorVideos,
    error: errorVideos,
  } = useQuery({
    queryKey: ['videos', urlVideos],
    queryFn: getData,
    enabled: type !== 'person', 
  });

  if (isLoading || (isLoadingVideos && type !== 'person')) {
    return (
      <div>
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  if (isError || (isErrorVideos && type !== 'person')) {
    return <div>Error: {error || errorVideos}</div>;
  }

  return (
    <div
      onClick={() => document.getElementById(id).showModal()}
      className="card glass bg-slate-800 text-slate-100 w-96 shadow-xl hover:scale-105 transition-all cursor-pointer"
    >
      <figure>
        <span className="absolute right-5 top-5 bg-yellow-500 rounded-md p-1 font-bold min-w-8 text-center">
          {vote}
        </span>
        <img src={image ? img_500 + image : imgUnavailable} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
          <p className="uppercase font-semibold">{type}</p>
          <p className="italic mt-3">{airDate}</p>
        </div>
      </div>
      <dialog id={id} className="modal text-slate-800">
        <Modal
          title={title}
          id={id}
          type={type}
          description={description}
          image={image}
          tagline={data?.tagline}
          dataVideos={type !== 'person' ? dataVideos : null}
        />
      </dialog>
      
    </div>
  );
}

export default Card;
