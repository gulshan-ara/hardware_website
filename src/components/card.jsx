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
	flex: 1;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	padding: 20px 20px;
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
	text-align: justify;
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
					F​ounded on the principles of integrity, reliability, and
					customer-centricity, ZSS began its journey as a provider of
					OEM products to a diverse clientele across industries. Over
					the years, we have established ourselves as a trusted
					partner, known for delivering high-quality products and
					exceptional service.
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
					Our vision is to redefine the hardware market by leveraging
					technology, industry expertise, and strategic partnerships
					to deliver unparalleled value to our clients. We envision a
					future where product delivery is efficient and tailored to
					the unique requirements of each customer.
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
					With the history so rich and the vision so clear, our
					mission is to disrupt the hardware market with unmatched
					product quality and consistent innovation. We thrive to
					deliver the best experience to our customers as well as our
					channel partners.
				</Description>
			</Card>
		</CardContainer>
	);
};

export default IntroRow;
