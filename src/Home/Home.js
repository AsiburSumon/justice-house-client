import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import img1 from '../images/images/home/img1.jpg'
import banner from '../images/banner/banner.png'
import Certificates from "./Certificates";
import ServiceForHome from '../Services/ServiceForHome'

const Home = () => {
  const allServices = useLoaderData();
  
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

      <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 mx-8'>
        {
          allServices.map(perService => <ServiceForHome key={perService._id} perService={perService}></ServiceForHome> )
        }
      </div>

      <div className="text-center my-10">
        <Link to="/services"><button className="btn btn-primary">View All</button></Link>
      </div>

      <div className="mb-10">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <img className="rounded-xl" src={img1} alt='error' />
              <div className="sm:ml-5">
                <h1 className="text-5xl font-bold">About Me</h1>
                <p className="py-6">I am Advocate <span className="font-bold">Asibur Rahman LLB</span>. I am professional lawyer. I graduated from Harvard University. I try to provide legal services.</p>
              </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center font-bold text-2xl font-serif text-orange-600 ">My All Certificates</h2>
        <Certificates></Certificates>
      </div>
    </div>
  );
};

export default Home;
