import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you're using FontAwesome
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
	background-color: #000;
	color: #fff;
	padding: 20px 0;
`;

const Container = styled.div`
	width: 90%;
	margin: 0 auto;
`;

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

const SocialMedia = styled.div`
	display: flex;
	justify-content: center;

	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

const SocialLink = styled.a`
	color: #fff;
	text-decoration: none;
	margin-right: 10px;
	font-size: 1.5rem;
`;

const ContactDetails = styled.div`
	margin-top: 20px;
	text-align: center;

	@media (min-width: 768px) {
		margin-top: 0;
		margin-left: auto;
		text-align: left;
	}
`;

const CenterLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		margin-right: auto;
	}
`;

const Separator = styled.span`
	color: #fff;
	margin: 10px 0;

	@media (min-width: 768px) {
		margin: 0 10px;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Container>
				<FooterContent>
					<CenterLinks>
						<Link
							to="/hardware_website/privacy-policy"
							style={{ color: "#fff", textDecoration: "none" }}
						>
							Privacy Policy
						</Link>
						<Separator>|</Separator>
						<Link
							to="/hardware_website/Disclaimer"
							style={{ color: "#fff", textDecoration: "none" }}
						>
							Disclaimer
						</Link>
					</CenterLinks>
					<SocialMedia>
						<SocialLink
							href="https://www.facebook.com/example"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</SocialLink>
						<SocialLink
							href="https://www.twitter.com/example"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</SocialLink>
						<SocialLink
							href="https://www.instagram.com/example"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</SocialLink>
						<SocialLink href="mailto:contact@example.com">
							<FontAwesomeIcon icon={faEnvelope} />
						</SocialLink>
					</SocialMedia>
					<ContactDetails>
						<p>Contact Us: +123456789</p>
						<p>Email: contact@example.com</p>
					</ContactDetails>
				</FooterContent>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
