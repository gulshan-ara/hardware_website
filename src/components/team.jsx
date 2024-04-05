import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
	flex-wrap: wrap; /* Allow cards to wrap to the next row */
	justify-content: space-around;
	margin: 50px 10%;
	/* Responsive styles */
	@media (max-width: 768px) {
		margin: 50px 5%;
	}
	@media (max-width: 480px) {
		margin: 20px 2%;
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
		width: calc(50% - 40px); /* Make cards take 50% width on screens smaller than 768px */
	}
	@media (max-width: 480px) {
		width: calc(100% - 40px); /* Make cards take 100% width on screens smaller than 480px */
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
	margin: 20px 0 10px;
	text-align: center;
`;

const Designation = styled.p`
	color: #666;
	text-align: center;
	font-weight: 700;
	margin-top: 0;
`;

const SocialMediaLinks = styled.div`
	display: flex;
	justify-content: center;
`;

const TeamRow = () => {
	return (
		<CardContainer>
			<Card>
				<ImageContainer>
					<Image src="./assets/images/image_1.png" alt="About Us" />
				</ImageContainer>
				<Name>Ayush Sharma</Name>
				<Designation>Director</Designation>
				<SocialMediaLinks>
					<FontAwesomeIcon
						icon={faFacebookF}
						style={{ marginRight: "10px" }}
					/>
					<FontAwesomeIcon
						icon={faTwitter}
						style={{ marginRight: "10px" }}
					/>
					<FontAwesomeIcon
						icon={faLinkedinIn}
						style={{ marginRight: "10px" }}
					/>
				</SocialMediaLinks>
			</Card>
			<Card>
				<ImageContainer>
					<Image src="./assets/images/image_1.png" alt="About Us" />
				</ImageContainer>
				<Name>Pankaj Rana</Name>
				<Designation>Director</Designation>
				<SocialMediaLinks>
					<FontAwesomeIcon
						icon={faFacebookF}
						style={{ marginRight: "10px" }}
					/>
					<FontAwesomeIcon
						icon={faTwitter}
						style={{ marginRight: "10px" }}
					/>
					<FontAwesomeIcon
						icon={faLinkedinIn}
						style={{ marginRight: "10px" }}
					/>
				</SocialMediaLinks>
			</Card>
			<Card>
				<ImageContainer>
					<Image src="./assets/images/image_1.png" alt="About Us" />
				</ImageContainer>
				<Name>Gabriella</Name>
				<Designation>Director</Designation>
				<SocialMediaLinks>
					<FontAwesomeIcon
						icon={faFacebookF}
						style={{ marginRight: "10px" }}
					/>
					<FontAwesomeIcon
						icon={faTwitter}
						style={{ marginRight: "10px" }}
					/>
					<FontAwesomeIcon
						icon={faLinkedinIn}
						style={{ marginRight: "10px" }}
					/>
				</SocialMediaLinks>
			</Card>
		</CardContainer>
	);
};

export default TeamRow;
