import React from "react";
import styled, { keyframes } from "styled-components";

const fall = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

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

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%; /* Make the image round */
	object-fit: cover; /* Maintain aspect ratio */
  animation: ${fall} 0.5s ease forwards; /* Play the fall animation */
	opacity: 0;
`;

const Name = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
	color: #666;
`;

const TeamRow = () => {
	return (
		<CardContainer>
			<Card>
				<ImageContainer>
					<Image src="/assets/images/image_1.png" alt="About Us" />
				</ImageContainer>
				<Name>Ayush Sharma</Name>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Description>
			</Card>
			<Card>
				<ImageContainer>
					<Image src="/assets/images/image_1.png" alt="About Us" />
				</ImageContainer>
				<Name>Pankaj Rana</Name>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Description>
			</Card>
			<Card>
				<ImageContainer>
					<Image src="/assets/images/image_1.png" alt="About Us" />
				</ImageContainer>
				<Name>Gabriella</Name>
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

export default TeamRow;
