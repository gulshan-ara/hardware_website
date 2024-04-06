import React from "react";
import styled from "styled-components";

const Container = styled.div`
	max-width: 800px;
	margin: 50px auto 150px;
	padding: 20px;
`;

const Title = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	margin-top: 20px; /* Add margin top */
	padding: 10px; /* Add padding */
`;

const SubTitle = styled.h2`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 5px;
	margin-top: 5px; /* Add margin top */
	padding: 10px; /* Add padding */
`;

const Paragraph = styled.p`
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 10px;
	margin-top: 5px; /* Add margin top */
	padding: 10px; /* Add padding */
	text-align: justify;
`;

const BulletList = styled.ul`
	list-style-type: disc;
	margin-left: 20px;
`;

const BulletPoint = styled.li`
	margin-bottom: 5px;
`;

const Privacy = () => {
	return (
		<Container>
			<Title>Privacy Policy</Title>
			<Paragraph>
				This Privacy Policy describes how Zeker India Pvt. Ltd. ("we",
				"us", or "our") collects, uses, and discloses your information
				when you use our website and services. We are committed to
				protecting your privacy and ensuring the security of your
				personal information. Please read this Privacy Policy carefully
				to understand our practices regarding your information and how
				we will treat it.
			</Paragraph>
			<SubTitle>1. Information We Collect</SubTitle>
			<Paragraph>
				We may collect personal information from you when you interact
				with our website, products, or services. This information may
				include:
			</Paragraph>
			<BulletList>
				<BulletPoint>
					Personal identification information such as your name, email
					address, phone number, and postal address.
				</BulletPoint>
				<BulletPoint>
					Account information such as your username, password, and
					other credentials used to access our services.
				</BulletPoint>
				<BulletPoint>
					Payment information such as credit card details for
					processing orders.
				</BulletPoint>
				<BulletPoint>
					Communication preferences including your preferences for
					receiving marketing communications from us.
				</BulletPoint>
			</BulletList>
			<Paragraph>
				We may also collect non-personal information such as browser
				type, operating system, IP address, and website usage data
				through cookies and similar technologies.
			</Paragraph>
			<SubTitle>2. How We Use Your Information</SubTitle>
			<Paragraph>
				We may use the information we collect for the following
				purposes:
			</Paragraph>
			<BulletList>
				<BulletPoint>
					To provide and improve our products and services.
				</BulletPoint>
				<BulletPoint>
					To process transactions and fulfill orders.
				</BulletPoint>
				<BulletPoint>
					To communicate with you about your account, orders, and
					inquiries.
				</BulletPoint>
				<BulletPoint>
					To send you marketing communications about our products and
					services that may be of interest to you.
				</BulletPoint>
				<BulletPoint>
					To personalize your experience and tailor content and
					advertisements to your preferences.
				</BulletPoint>
				<BulletPoint>
					To conduct research and analysis to better understand our
					customers and improve our business.
				</BulletPoint>
			</BulletList>
			<SubTitle>3. Data Security</SubTitle>
			<Paragraph>
				We are committed to protecting the security of your information
				and have implemented appropriate technical and organizational
				measures to safeguard it against unauthorized access,
				disclosure, alteration, or destruction.
			</Paragraph>
			<SubTitle>4. Data Sharing and Disclosure</SubTitle>
			<Paragraph>
				We may share your information with third-party service providers
				who assist us in operating our website, conducting our business,
				or servicing you. These service providers may have access to
				your personal information only to perform these tasks on our
				behalf and are obligated not to disclose or use it for any other
				purpose.
			</Paragraph>
			<Paragraph>
				We may also disclose your information in response to lawful
				requests from public authorities, including to meet national
				security or law enforcement requirements.
			</Paragraph>
			<SubTitle>5. Third-Party Links</SubTitle>
			<Paragraph>
				Our website may contain links to third-party websites or
				services that are not owned or controlled by us. We are not
				responsible for the privacy practices or content of these
				third-party sites and encourage you to review their privacy
				policies before providing any personal information.
			</Paragraph>
			<SubTitle>6. Data Retention</SubTitle>
			<Paragraph>
				We will retain your personal information for as long as
				necessary to fulfill the purposes outlined in this Privacy
				Policy unless a longer retention period is required or permitted
				by law.
			</Paragraph>
			<SubTitle>7. Your Choices</SubTitle>
			<Paragraph>
				You have the right to access, update, or delete your personal
				information at any time by contacting us using the contact
				information provided below. You may also opt-out of receiving
				marketing communications from us by following the instructions
				included in those communications.
			</Paragraph>
			<SubTitle>8. Children's Privacy</SubTitle>
			<Paragraph>
				Our website and services are not directed to children under the
				age of 13, and we do not knowingly collect personal information
				from children. If you are under 13, please do not provide any
				personal information to us.
			</Paragraph>
			<SubTitle>9. Changes to this Privacy Policy</SubTitle>
			<Paragraph>
				We may update this Privacy Policy from time to time to reflect
				changes in our practices or legal requirements. We will notify
				you of any material changes by posting the updated Privacy
				Policy on our website.
			</Paragraph>
			<SubTitle>10. Contact Us</SubTitle>
			<Paragraph>
				If you have any questions or concerns about this Privacy Policy
				or our practices regarding your information, please contact us
				at [contact email or address].
			</Paragraph>
			<SubTitle>Cyber Policy</SubTitle>
			<Paragraph>
				In addition to our Privacy Policy, we maintain a Cyber Policy to
				ensure the security and integrity of our digital assets. Our
				Cyber Policy includes measures such as:
			</Paragraph>
			<BulletList>
				<BulletPoint>
					Regular security assessments and vulnerability scans of our
					website and systems.
				</BulletPoint>
				<BulletPoint>
					Implementation of industry-standard encryption protocols to
					protect data transmission.
				</BulletPoint>
				<BulletPoint>
					Access controls and authentication mechanisms to prevent
					unauthorized access to sensitive information.
				</BulletPoint>
				<BulletPoint>
					Employee training and awareness programs to educate staff
					about cybersecurity best practices.
				</BulletPoint>
				<BulletPoint>
					Incident response procedures to promptly address and
					mitigate any security breaches.
				</BulletPoint>
			</BulletList>
			<Paragraph>
				We take the security of your information seriously and are
				committed to maintaining the confidentiality, integrity, and
				availability of our systems and data.
			</Paragraph>
			<SubTitle>Data Collection and Usage</SubTitle>
			<Paragraph>
				Our data collection and usage practices are guided by the
				principles of transparency, accountability, and data
				minimization. We only collect and process personal information
				that is necessary for the purposes outlined in this Privacy
				Policy and do not use it for any other purpose without your
				consent.
			</Paragraph>
			<Paragraph>
				We may anonymize or aggregate data for statistical analysis and
				reporting purposes, but we will not disclose any personally
				identifiable information without your explicit consent.
			</Paragraph>
			<Paragraph>
				By using our website and services, you consent to the
				collection, use, and disclosure of your information as described
				in this Privacy Policy and our Cyber Policy.
			</Paragraph>
			<Paragraph>
				If you have any questions or concerns about our data collection
				and usage practices, please contact us using the contact
				information provided in this Privacy Policy.
			</Paragraph>
			<Paragraph>
				This Privacy Policy is intended to provide comprehensive
				coverage of your privacy practices, including data collection,
				usage, and cyber policies. Make sure to review and customize it
				further to fit your specific needs and legal requirements.
			</Paragraph>
		</Container>
	);
};

export default Privacy;
