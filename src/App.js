import React, { useRef } from "react";
import { NavBar } from "./components/navbar";
import { ImageCarousel } from "./components/carousel";
import IntroRow from "./components/card";
import TeamRow from "./components/team";
import styled from "styled-components";
import CompanyFeaturesRow from "./components/feature";
import LearnMoreRow from "./components/learnMore";
import TestimonialCarousel from "./components/testimonial";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import Footer from "./components/footer";

const Headline = styled.div`
	text-align: center;
	font-size: 40px;
	font-weight: bold;
`;

function App() {
	const teamRowRef = useRef(null);
	const teamRowVisible = useIntersectionObserver(teamRowRef);

	const testimonialCarouselRef = useRef(null);
	const testimonialCarouselVisible = useIntersectionObserver(
		testimonialCarouselRef
	);

	const transparentCardRowRef = useRef(null);
	const transparentCardRowVisible = useIntersectionObserver(
		transparentCardRowRef
	);

	return (
		<div>
			<NavBar />
			<ImageCarousel />
			<IntroRow />
			<div>
				<Headline>The Leadership Team</Headline>
				<div ref={teamRowRef}>{teamRowVisible && <TeamRow />}</div>
			</div>
			<div ref={transparentCardRowRef}>
				{transparentCardRowVisible && <CompanyFeaturesRow />}
			</div>
			<LearnMoreRow />
			<div style={{ margin: "30px" }}>
				<Headline>Testimonials</Headline>
				<div ref={testimonialCarouselRef}>
					{testimonialCarouselVisible && <TestimonialCarousel />}
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
