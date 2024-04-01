import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you're using FontAwesome
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
	justify-content: space-between;
	align-items: center;
`;

const SocialMedia = styled.div`
	display: flex;
`;

const SocialLink = styled.a`
	color: #fff;
	text-decoration: none;
	margin-right: 10px;
	font-size: 1.5rem;
`;

const ContactDetails = styled.div`
	margin-left: auto;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Container>
				<FooterContent>
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
