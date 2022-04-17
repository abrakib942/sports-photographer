import React from "react";
import useService from "../../hooks/useService";
import Service from "../service/Service";

const AllServices = () => {
  const [services, setServices] = useService();
  return (
    <div className="container">
      <h2 className="text-center my-5 fst-italic">
        Create the entire scene - simply!
      </h2>

      <div className="row row-cols-lg-3 row-cols-md-2 ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
