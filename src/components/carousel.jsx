import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

// Define styled components
const CarouselItem = styled.div`
  position: relative;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(150px, -80%);
  text-align: left;
`;

const Title = styled.h2`
  margin: 3px 0;
  font-size: 40px;
  color: #535e65;
`;

const Description = styled.p`
  margin: 3px 0;
  font-size: 30px;
  color: #fff;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 500px;
`;

export const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <CarouselItem>
        <Caption>
          <Title>Bathroom Hardware</Title>
          <Description>Serenity in the silence</Description>
        </Caption>
        <StyledImage src="./assets/images/image_1.png" alt="Image 1" />
      </CarouselItem>
      <CarouselItem>
        <Caption>
          <Title>Door Hardware</Title>
          <Description>Let the class speak the truth</Description>
        </Caption>
        <StyledImage src="./assets/images/image_1.png" alt="Image 2" />
      </CarouselItem>
      <CarouselItem>
        <Caption>
          <Title>Furniture Fittings</Title>
          <Description>Crafted from metal, Curated from heart</Description>
        </Caption>
        <StyledImage src="./assets/images/image_1.png" alt="Image 3" />
      </CarouselItem>
    </Slider>
  );
};
