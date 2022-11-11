import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-blond.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Service {`-JusticeHouse`}</title>
      </Helmet>
      <h3 className="text-center font-bold text-3xl text-orange-600 my-6">
        My Services
      </h3>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mx-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
