import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 50px 10%;
	/* Responsive styles */
	@media (max-width: 480px) {
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		margin: 10px 2%;
	}
`;

const Card = styled.div`
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	padding: 20px;
	margin: 20px;
	transition: transform 0.3s ease; /* Added transition property */
	&:hover {
		transform: translateY(-15px); /* Move card up by 10px on hover */
	}
	/* Responsive styles */
	@media (max-width: 768px) {
		width: calc(
			50% - 40px
		); /* Make cards take 50% width on screens smaller than 768px */
	}
	@media (max-width: 480px) {
		width: calc(
			100% - 40px
		); /* Make cards take 100% width on screens smaller than 480px */
	}
`;

const Title = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`;

const Description = styled.p`
	color: #666;
`;

const IntroRow = () => {
	return (
		<CardContainer>
			<Card>
				<Title>
					<FontAwesomeIcon
						icon={faUser}
						style={{ marginRight: "10px" }}
					/>
					About Us
				</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Description>
			</Card>
			<Card>
				<Title>
					<FontAwesomeIcon
						icon={faCog}
						style={{ marginRight: "10px" }}
					/>
					Vision
				</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Description>
			</Card>
			<Card>
				<Title>
					<FontAwesomeIcon
						icon={faCog}
						style={{ marginRight: "10px" }}
					/>
					Mission
				</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Description>
			</Card>
		</CardContainer>
	);
};

export default IntroRow;
