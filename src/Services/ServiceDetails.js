import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);

  const serviceDetails = useLoaderData();

  const { title, photo, details, _id, fees } = serviceDetails;

  const handleReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || 'User' ;
    const email = user?.email;
    const review = form.review.value;
    
    const reviews = {
      service: _id,
      reviewer: name,
      review,
      email,
      name: title
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        form.reset();
      }
    })
    .catch(error => console.error(error))


  }

  return (
    <div>
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
      
    <div>

    </div>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleReview}>
          <div className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
                readOnly
                name="name"
                className="input input-bordered"
              />
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Add Your Review</span>
              </label>
              <textarea className="pt-5 bg-gray-200" name="review" 
              
              cols="10" rows="5" placeholder="Type your review here" required></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
