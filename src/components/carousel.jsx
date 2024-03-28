import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
			<div className="carousel-item">
				<div className="carousel-caption">
					<h2>Bathroom Hardware</h2>
					<p>Serenity in the silence</p>
				</div>
				<img src="/assets/images/image_1.png" alt="Image 1" />
			</div>
			<div className="carousel-item">
				<div className="carousel-caption">
					<h2>Door Hardware</h2>
					<p>Let the class speak the truth</p>
				</div>
				<img src="/assets/images/image_1.png" alt="Image 2" />
			</div>
			<div className="carousel-item">
				<div className="carousel-caption">
					<h2>Furniture Fittings</h2>
					<p>Crafted from metal, Curated from heart</p>
				</div>
				<img src="/assets/images/image_1.png" alt="Image 3" />
			</div>
		</Slider>
	);
};

// Combined CSS and JSX
const styles = `
/* CSS styles for the image carousel */
.carousel-item {
  position: relative;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(150px, -80%);
  text-align: left;
  
}

.carousel-caption h2{
  margin: 3px 0;
  font-size: 40px;
  color: #535e65;
}

.carousel-caption p {
  margin: 3px 0;
  font-size: 30px;
  color: #fff;
}

.carousel-item img {
  width: 100%;
  height: 500px;
}
`;

// Inject the styles into the document
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
