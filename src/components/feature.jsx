import React from "react";
import styled from "styled-components";

// Define the styled components
const TransparentBackground = styled.div`
	background-color: rgba(
		133,
		133,
		133,
		0.1
	); /* Transparent white background */
	padding: 20px; /* Adjust padding as needed */
`;

const CardRow = styled.div`
	display: flex;
	justify-content: space-around; /* Cards will be evenly spaced */
`;

const Card = styled.div`
	flex: 1; /* Adjust card width as needed */
	height: 300px; /* Adjust card height as needed */
	background-color: white;
	border-radius: 10px; /* Rounded corners for the cards */
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add a slight shadow for depth */
	margin: 30px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Circle = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: lightblue;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white; /* Set text color to white */
	padding: 10px;
`;

const Title = styled.h3`
	font-size: 35;
	font-weight: 500;
`;

const Description = styled.p`
	font-size: 25;
	font-weight: 500;
	letter-spacing: 0.3;
	color: grey;
`;

// Define the TransparentCardRow component
const TransparentCardRow = () => {
	return (
		<TransparentBackground>
			<CardRow>
				<Card>
					<Circle>
						<h3 style={{"font-size": 40, "text-align": "center"}}>30000+ Sqft</h3>
					</Circle>
					<Title>Manufacture quality</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</Description>
				</Card>
				<Card>
					<Circle>
						<h3 style={{"font-size": 40}}>60+</h3>
					</Circle>
					<Title>Employees on our team</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</Description>
				</Card>
			</CardRow>
			<CardRow>
				<Card>
					<Circle>
						<h3 style={{"font-size": 40}}>300</h3>
					</Circle>
					<Title>Happy Clients</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</Description>
				</Card>
				<Card>
					<Circle>
						<h3 style={{"font-size": 40}}>1</h3>
					</Circle>
					<Title>Motto</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</Description>
				</Card>
			</CardRow>
		</TransparentBackground>
	);
};

export default TransparentCardRow;
