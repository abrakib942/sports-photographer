import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "../footer/Footer";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
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

      <Footer />
    </div>
  );
};

export default Home;
