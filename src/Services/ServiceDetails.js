import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { title, photo, details, _id, fees } = serviceDetails;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-10">
      <figure>
        <PhotoProvider>
          <PhotoView src={photo}>
            <img src={photo} alt="error" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="font-bold">Fees: ${fees}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
