import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "../footer/Footer";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import useService from "../../hooks/useService";
import Service from "../service/Service";
import { Link } from "react-router-dom";
import OtherActivities from "../otherActivities/OtherActivities";

const Home = () => {
  const [services, setServices] = useService();
  return (
    <div>
      <div className="site-name ">
        <h3 className="text-center mt-5 fst-italic title">
          A <span className="text-primary">Sports Photographer</span>, <br />{" "}
          Who Clicks of Champions and Emotions.
        </h3>
      </div>
      <Carousel className="caption">
        <Carousel.Item>
          <img
            className="d-block w-100 col col-lg-4"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="fw-bold fst-italic">
              Shoot today. Upload tonight. The professional's source.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="fw-bold fst-italic">
              Your passion is capturing great moments. So is mines.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="fw-bold fst-italic">
              The power behind the picture.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <h2 className="text-center my-5">
          Best moments of matches <br />
          <span className="text-primary">Explore Services</span>
        </h2>

        <div className=" row row-cols-lg-3 row-cols-md-2 ">
          {services.slice(0, 3).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <Link
          to="/services"
          className="text-danger fw-bold btn btn-link text-decoration-none d-block mx-auto"
        >
          See All
        </Link>
      </div>

      <OtherActivities />

      <Footer />
    </div>
  );
};

export default Home;
