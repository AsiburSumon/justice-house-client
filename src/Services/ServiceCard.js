import React from "react";

const ServiceCard = ({ service }) => {
    const {title, photo, fees, details} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="error" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Fees: {fees}</p>
        <p>{details.slice(0,100) + "..." }</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
