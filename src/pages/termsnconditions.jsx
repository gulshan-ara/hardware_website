import React from "react";
import styled from "styled-components";

const Container = styled.div`
	max-width: 800px;
	margin: 50px auto 50px;
	padding: 20px;
`;

const Title = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	margin-top: 20px; /* Add margin top */
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

const TermsnConditions = () => {
	return (
		<Container>
			<Title>Terms and Conditions for Zeker India Pvt. Ltd.</Title>
			<Paragraph>
				Welcome to Zeker India Pvt. Ltd. Please read these Terms and
				Conditions ("Terms", "Terms and Conditions") carefully before
				using the www.zekerindia.com website (together, or individually,
				the "Service") operated by Zeker India Pvt. Ltd. ("us", "we", or
				"our"). <br /> <br /> Your access to and use of the Service is
				conditioned on your acceptance of and compliance with these
				Terms. These Terms apply to all visitors, users, and others who
				access or use the Service.
			</Paragraph>
			<Paragraph>
				<b>1. Intellectual Property: </b> The Service and its original
				content, features, and functionality are and will remain the
				exclusive property of Zeker India Pvt. Ltd. and its licensors.
				The Service is protected by copyright, trademark, and other laws
				of both the United States and foreign countries. Our trademarks
				and trade dress may not be used in connection with any product
				or service without the prior written consent of Zeker India Pvt.
				Ltd. .
			</Paragraph>
			<Paragraph>
				<b>2. Use License:</b> Permission is granted to temporarily
				download one copy of the materials (information or software) on
				zekerindia.com for personal, non-commercial transitory viewing
				only. This is the grant of a license, not a transfer of title,
				and under this license, you may not: <br />
				<br />- modify or copy the materials;
				<br />
				<br /> - use the materials for any commercial purpose, or for
				any public display (commercial or non-commercial);
				<br />
				<br /> - attempt to decompile or reverse engineer any software
				contained on zekerindia.com;
				<br />
				<br /> - remove any copyright or other proprietary notations
				from the materials; or<br />
				<br />
				- transfer the materials to another person or "mirror" the
				materials on any other server.
				<br />
				<br />
				This license shall automatically terminate if you violate any of
				these restrictions and may be terminated by Zeker India Pvt.
				Ltd. at any time. Upon terminating your viewing of these
				materials or upon the termination of this license, you must
				destroy any downloaded materials in your possession whether in
				electronic or printed format.
			</Paragraph>
			<Paragraph>
				<b>3. Disclaimer:</b> The materials on [Company Name]'s website
				are provided on an 'as is' basis. Zeker India Pvt. Ltd. makes no
				warranties, expressed or implied, and hereby disclaims and
				negates all other warranties including, without limitation,
				implied warranties or conditions of merchantability, fitness for
				a particular purpose, or non-infringement of intellectual
				property or other violation of rights.
				<br />
				<br />
				Further, Zeker India Pvt. Ltd. does not warrant or make any
				representations concerning the accuracy, likely results, or
				reliability of the use of the materials on its website or
				otherwise relating to such materials or on any sites linked to
				this site.
			</Paragraph>
			<Paragraph>
				<b>4. Limitations: </b> In no event shall Zeker India Pvt. Ltd.
				or its suppliers be liable for any damages (including, without
				limitation, damages for loss of data or profit, or due to
				business interruption) arising out of the use or inability to
				use the materials on zekerindia.com, even if Zeker India Pvt.
				Ltd. or a Zeker India Pvt. Ltd. authorized representative has
				been notified orally or in writing of the possibility of such
				damage.
			</Paragraph>
			<Paragraph>
				<b>5. Accuracy of Materials: </b> The materials appearing on
				zekerindia.com could include technical, typographical, or
				photographic errors. Zeker India Pvt. Ltd. does not warrant that
				any of the materials on its website are accurate, complete, or
				current. Zeker India Pvt. Ltd. may make changes to the materials
				contained on its website at any time without notice. However,
				Zeker India Pvt. Ltd. does not make any commitment to update the
				materials.
			</Paragraph>
			<Paragraph>
				<b>6. Links: </b> Zeker India Pvt. Ltd. has not reviewed all of
				the sites linked to its website and is not responsible for the
				contents of any such linked site. The inclusion of any link does
				not imply endorsement by Zeker India Pvt. Ltd. of the site. Use
				of any such linked website is at the user's own risk.
			</Paragraph>
			<Paragraph>
				<b>7. Modifications: </b> Zeker India Pvt. Ltd. may revise these
				Terms and Conditions at any time without notice. By using this
				website, you are agreeing to be bound by the then current
				version of these Terms and Conditions.
			</Paragraph>
			<Paragraph>
				<b>8. Governing Law: </b> These terms and conditions are
				governed by and construed in accordance with the laws of Rajkot
				and you irrevocably submit to the exclusive jurisdiction of the
				courts in that State or location.
			</Paragraph>
			<Paragraph>
				If you have any questions about these Terms, please contact us
				at compliance@zekerindia.com.
			</Paragraph>
		</Container>
	);
};

export default TermsnConditions;
