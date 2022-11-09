import React from "react";
import { Link } from "react-router-dom";
import banner from '../images/banner/banner.png'
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-8 "
        style={{ backgroundImage: `url("https://prod-media-eng.dhakatribune.com/uploads/2019/08/high-court-2-1545807973809-1566489765847.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content grid grid-cols-1 lg:grid-cols-2">
            <img src={banner} alt="no-img" />
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To <br /> Justice House</h1>
            <p className="mb-5 text-4xl text-bold font-serif ">
                I Provide Quality Legal Services
            </p>
            <p className="mb-5 text-3xl text-orange-300">
                "Advocate Asibur Rahman LLB"
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Services></Services>
      </div>
      <div className="text-center my-10">
        <Link to="/services"><button className="btn btn-primary">View All</button></Link>
      </div>
    </div>
  );
};

export default Home;
