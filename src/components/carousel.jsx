import React from "react";
import { Carousel } from 'react-bootstrap';

export const ImageCarousel = () => {
  return (
    <Carousel controls={false} interval={1000}>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + "/assets/images/image_1.png"} className="d-block w-100" alt="Image 1" />
        <Carousel.Caption>
          <h3>Bathroom Hardware</h3>
          <p>Serenity in the silence</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + "/assets/images/image_1.png"} className="d-block w-100" alt="Image 2" />
        <Carousel.Caption>
          <h3>Door Hardware</h3>
          <p>Let the class speak the truth</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + "/assets/images/image_1.png"} className="d-block w-100" alt="Image 3" />
        <Carousel.Caption>
          <h3>Furniture Fittings</h3>
          <p>Crafted from metal, Curated from heart</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
