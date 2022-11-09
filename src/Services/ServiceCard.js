import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {title, photo, fees, details, _id} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
      <PhotoProvider>
      <PhotoView src={photo}>
        <img src={photo} alt="error" />
      </PhotoView>
    </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold">Fees: ${fees}</p>
        <p>{details.slice(0,100) + "..." }</p>
        <div className="card-actions justify-end">
          <Link to={`/servicedetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
