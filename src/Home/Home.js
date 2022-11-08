import React from "react";
import banner from '../images/banner/banner.png'

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
            <h1 className="mb-5 text-5xl font-bold">Welcome <br /> To <br /> Justice House</h1>
            <p className="mb-5 text-3xl text-orange-300">
                "Advocate Asibur Rahman LLB"
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3>My Services</h3>
      </div>
    </div>
  );
};

export default Home;
