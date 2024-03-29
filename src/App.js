import React from "react";
import { NavBar } from "./components/navbar";
import { ImageCarousel } from "./components/carousel";
import CardRow from "./components/card";
import TeamRow from "./components/team";
import styled from "styled-components";
import TransparentCardRow from "./components/feature";
import RowWithColumn from "./components/learnMore";
import TestimonialCarousel from "./components/testimonial";

const Headline = styled.div`
	text-align: center;
	font-size: 40px;
	font-weight: bold;
`;

function App() {
	return (
		<div>
			<NavBar />
			<ImageCarousel />
			<CardRow />
			<div>
				<Headline>The Leadership Team</Headline>
				<TeamRow />
			</div>
			<TransparentCardRow />
			<RowWithColumn />
			<div style={{margin: "30px"}}>
				<Headline>Testimonials</Headline>
				<TestimonialCarousel />
			</div>
		</div>
	);
}

export default App;
