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

const Paragraph = styled.p`
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 15px;
	margin-top: 10px; /* Add margin top */
	padding: 10px; /* Add padding */
	text-align: justify;
`;

const Disclaimer = () => {
	return (
		<Container>
			<Title>Disclaimer</Title>
			<Paragraph>
				The information and services may contain defects, inaccuracies,
				issues, or other limitations. We and our affiliated parties bear
				no responsibility for any consequences resulting from your
				utilization of any information or service. Specifically, but not
				exclusively, we and our affiliated parties are not accountable
				for any indirect, special, incidental, or consequential damages
				(including damages for loss of business, loss of profits, legal
				disputes, or similar matters), regardless of whether they arise
				from breach of contract, breach of warranty, negligence, product
				liability, or any other legal theory, even if we have been
				advised of the possibility of such damages. The exclusion of
				damages mentioned above are essential components of the
				agreement between us and you. This site and the information
				provided would not be possible without these limitations. Any
				advice or information, whether oral or written, obtained by you
				from us through the site does not create any warranty,
				representation, or guarantee that is not explicitly stated in
				this agreement.
			</Paragraph>
		</Container>
	);
};

export default Disclaimer;
