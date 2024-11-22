import React from 'react';
import { og, noPictureLandscape } from '../utils/api';
import { Carousel } from './Carousel';

export const Modal = ({ title, description, image, tagline, id, type, dataVideos }) => {
    console.log(dataVideos?.results[0]);
  return (
    <div className="modal-box flex items-center flex-col">
      <h3 className="font-bold text-lg mb-5">{title}</h3>
      <img className="rounded-md w-full" src={image ? og + image : noPictureLandscape} alt={title} />
      <p className="mt-5">{tagline}</p>
      <p className="mt-5 text-justify font-mono">{description || "There is no review of this yet."}</p>

      <div className="w-full  mt-5">
        <Carousel id={id} media_type={type} />
      </div>
      
      {dataVideos?.results && dataVideos.results.length > 0 && 
        <div key={dataVideos.results[0].key}>
            <a href={`https://www.youtube.com/watch?v=${dataVideos.results[0].key}`}target="_blank">
                <button className='btn'>Play</button>
            </a>
        </div>
    }
    </div>
  );
};
