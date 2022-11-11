import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const [service, setService] = useState({});

  const handleAddService = (event) => {
    event.preventDefault();
    console.log(service);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service added");
          event.target.reset();
        }
      });
  };

  const handleInput = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };

  return (
    <div className="hero min-h-screen bg-base-200"
    style={{ backgroundImage: `url("https://prod-media-eng.dhakatribune.com/uploads/2019/08/high-court-2-1545807973809-1566489765847.jpg")` }}>
      <Helmet>
        <title>AddServices {`-JusticeHouse`}</title>
      </Helmet>
      <form onSubmit={handleAddService}>
      <h3 className="text-center text-white font-bold text-5xl mb-10 ">
        Here Add New Service
      </h3>
        <div className="card w-full max-w-md  shadow-2xl bg-base-100 mx-auto mb-10">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                onBlur={handleInput}
                type="text"
                placeholder="title"
                name="title"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fees</span>
              </label>
              <input
                onBlur={handleInput}
                type="text"
                placeholder="fees"
                name="fees"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                onBlur={handleInput}
                type="text"
                placeholder="photo URL"
                name="photo"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea className="pt-5 bg-gray-200" name="details" 
              onBlur={handleInput}
              cols="10" rows="5" placeholder="type here" required></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Add Service</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
