import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Define the styled components
const TransparentBackground = styled.div`
	background-color: rgba(133, 133, 133, 0.1);
	padding: 20px;
`;

const CardRow = styled.div`
	display: flex;
	flex-wrap: wrap; /* Allow cards to wrap to the next row */
	justify-content: space-around;
	margin: 0 -15px; /* Add negative margin to offset padding */
`;

const Card = styled.div`
	flex: 1 1 46%;
	min-width: 300px; /* Minimum width for each card */
	background-color: white;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	margin: 20px 2%; /* Center the cards horizontally */
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		flex-basis: calc(
			100% - 30px
		); /* Make cards take 100% width on screens smaller than 768px */
	}
`;

const Circle = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: lightblue;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
	margin-bottom: 20px; /* Add margin at the bottom to separate from the title */
	font-size: min(
		5vw,
		40px
	); /* Adjust font size dynamically based on screen width */
	@media (max-width: 768px) {
		width: 100px; /* Decrease circle size on smaller screens */
		height: 100px;
		margin-bottom: 10px; /* Decrease margin on smaller screens */
		font-size: min(
			8vw,
			30px
		); /* Adjust font size dynamically based on screen width */
	}
	@media (max-width: 480px) {
		font-size: min(
			15vw,
			30px
		); /* Further decrease font size for smaller screens */
	}
`;

const Title = styled.h3`
	font-size: 35px;
	font-weight: 500;
	text-align: center;
	margin: 15px 0; /* Add margin to separate title and description */
	@media (max-width: 768px) {
		font-size: 25px; /* Decrease font size on smaller screens */
	}
`;

const Description = styled.p`
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.3px;
	color: grey;
	text-align: center;
	@media (max-width: 768px) {
		font-size: 16px; /* Decrease font size on smaller screens */
	}
`;

// Define the TransparentCardRow component
const CompanyFeaturesRow = () => {
	const [sqft, setSqft] = useState(0);
	const [member, setMember] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSqft((prevNumber) => (prevNumber < 30 ? prevNumber + 1 : 30));
			setMember((prevNumber) => (prevNumber < 60 ? prevNumber + 1 : 60));
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return (
		<TransparentBackground>
			<CardRow>
				<Card>
					<Circle>{sqft}k+ Sqft</Circle>
					<Title>Manufacture quality</Title>
					<Description>
						Spread in around 30 thousand sq ft of area, our 3
						manufacturing facilities are equipped with
						state-of-the-art machines to deliver what it takes to
						out commitment of trust and quality.
					</Description>
				</Card>
				<Card>
					<Circle>{member}+</Circle>
					<Title>Employees on our team</Title>
					<Description>
						From sales to quality to finance, 60+ team members are
						working to ensure all our customers get the best
						experience irrespective of their domain or size.
					</Description>
				</Card>
				<Card>
					<Circle>300</Circle>
					<Title>Happy Clients</Title>
					<Description>
						In a span of 7 years we have served more than 300
						clients and eager to multiply this number by X.
					</Description>
				</Card>
				<Card>
					<Circle>1</Circle>
					<Title>Motto</Title>
					<Description>
						All these numbers synergise to achieve one moto. A
						happy, smiling, and secure customer.
					</Description>
				</Card>
			</CardRow>
		</TransparentBackground>
	);
};

export default CompanyFeaturesRow;

