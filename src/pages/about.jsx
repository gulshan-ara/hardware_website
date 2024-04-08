import React from "react";
import styled from "styled-components";
import Counter from "../components/counter";

const CounterContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
	width: 40%;
	margin: auto;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
	align-items: center;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		flex-direction: column; 
	}
`;

const TextContainer = styled.div`
	text-align: justify;
	padding: 30px;
	flex: 1;
`;

const Title = styled.p`
	font-size: 25px;
	font-weight: 800;
	margin: 10px 0;
`;

const Paragraph = styled.p`
	font-size: 18px;
	font-weight: 400;
`;

const AboutUs = () => {
	return (
		<div>
			<img
				src={process.env.PUBLIC_URL + "/assets/images/image_1.png"}
				width="100%"
				height={400}
			/>
			<Row>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/image_1.png"}
					height={300}
					width="50%"
					style={{ flex: 1, borderRadius: 10, margin: "20px" }}
				/>
				<TextContainer>
					<Title>The Journey of Zeker Hardware</Title>
					<Paragraph>
						Zeker Hardware elegantly defines luxury via its premium
						product range. Since its inception in 2010, Quba Group
						was type casted as a door handles company. As the
						company grew, we catered to various segments in the
						Builders Hardware Industry with premium quality products
						for our elite clients all over India. Quba Group is a
						design-led manufacturer that builds and designs premium
						architectural hardware for doors, kitchen interiors,
						bathroom fittings, and more. As a market leader in the
						Indian Builders Hardware Industry, our esteemed clients
						are architects, interior designers, furniture designers,
						and homeowners. As a company, we roll up our sleeves and
						create hardware that improves everyday functioning
						aesthetically.
					</Paragraph>
				</TextContainer>
			</Row>
			<Row reverse>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/image_1.png"}
					height={300}
					width="50%"
					style={{ flex: 1, borderRadius: 10, margin: "20px" }}
				/>
				<TextContainer>
					<Title>The Journey of Zeker Hardware</Title>
					<Paragraph>
						Zeker Hardware elegantly defines luxury via its premium
						product range. Since its inception in 2010, Quba Group
						was type casted as a door handles company. As the
						company grew, we catered to various segments in the
						Builders Hardware Industry with premium quality products
						for our elite clients all over India. Quba Group is a
						design-led manufacturer that builds and designs premium
						architectural hardware for doors, kitchen interiors,
						bathroom fittings, and more. As a market leader in the
						Indian Builders Hardware Industry, our esteemed clients
						are architects, interior designers, furniture designers,
						and homeowners. As a company, we roll up our sleeves and
						create hardware that improves everyday functioning
						aesthetically.
					</Paragraph>
				</TextContainer>
			</Row>
			<Row reverse>
				<TextContainer>
					<Title>The Journey of Zeker Hardware</Title>
					<Paragraph>
						Zeker Hardware elegantly defines luxury via its premium
						product range. Since its inception in 2010, Quba Group
						was type casted as a door handles company. As the
						company grew, we catered to various segments in the
						Builders Hardware Industry with premium quality products
						for our elite clients all over India. Quba Group is a
						design-led manufacturer that builds and designs premium
						architectural hardware for doors, kitchen interiors,
						bathroom fittings, and more. As a market leader in the
						Indian Builders Hardware Industry, our esteemed clients
						are architects, interior designers, furniture designers,
						and homeowners. As a company, we roll up our sleeves and
						create hardware that improves everyday functioning
						aesthetically.
					</Paragraph>
				</TextContainer>
				<CounterContainer style={{ flex: 1, margin: "30px" }}>
					<Counter
						title="Team Size"
						number={250}
						bgColor="#000"
						textColor="#fff"
					/>
					<Counter
						title="Team Size"
						number={250}
						bgColor="#fff"
						textColor="#000"
					/>
					<Counter
						title="Team Size"
						number={250}
						bgColor="#fff"
						textColor="#000"
					/>
					<Counter
						title="Team Size"
						number={250}
						bgColor="#000"
						textColor="#fff"
					/>
				</CounterContainer>
			</Row>
			<Title style={{ textAlign: "center" }}>Why Choose Us?</Title>
			<CounterContainer style={{ width: "80%" }}>
				<TextContainer
					style={{
						borderRadius: "10px",
						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
					}}
				>
					<Title>Customer Centricity</Title>
					<Paragraph>
						Teamwork makes the dream work. Our team of 200 employees
						works dedicatedly to make your dream.
					</Paragraph>
				</TextContainer>
				<TextContainer
					style={{
						borderRadius: "10px",
						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
					}}
				>
					<Title>Customer Centricity</Title>
					<Paragraph>
						Teamwork makes the dream work. Our team of 200 employees
						works dedicatedly to make your dream.
					</Paragraph>
				</TextContainer>
				<TextContainer
					style={{
						borderRadius: "10px",
						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
					}}
				>
					<Title>Customer Centricity</Title>
					<Paragraph>
						Teamwork makes the dream work. Our team of 200 employees
						works dedicatedly to make your dream.
					</Paragraph>
				</TextContainer>
				<TextContainer
					style={{
						borderRadius: "10px",
						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
					}}
				>
					<Title>Customer Centricity</Title>
					<Paragraph>
						Teamwork makes the dream work. Our team of 200 employees
						works dedicatedly to make your dream.
					</Paragraph>
				</TextContainer>
			</CounterContainer>
			<Row>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/image_1.png"}
					height={300}
					width="50%"
					style={{ flex: 1, borderRadius: 10, margin: "20px" }}
				/>
				<TextContainer>
					<Title>The Journey of Zeker Hardware</Title>
					<Paragraph>
						Zeker Hardware elegantly defines luxury via its premium
						product range. Since its inception in 2010, Quba Group
						was type casted as a door handles company. As the
						company grew, we catered to various segments in the
						Builders Hardware Industry with premium quality products
						for our elite clients all over India. Quba Group is a
						design-led manufacturer that builds and designs premium
						architectural hardware for doors, kitchen interiors,
						bathroom fittings, and more. As a market leader in the
						Indian Builders Hardware Industry, our esteemed clients
						are architects, interior designers, furniture designers,
						and homeowners. As a company, we roll up our sleeves and
						create hardware that improves everyday functioning
						aesthetically.
					</Paragraph>
				</TextContainer>
			</Row>
			<Row reverse>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/image_1.png"}
					height={300}
					width="50%"
					style={{ flex: 1, borderRadius: 10, margin: "20px" }}
				/>
				<TextContainer>
					<Title>The Journey of Zeker Hardware</Title>
					<Paragraph>
						Zeker Hardware elegantly defines luxury via its premium
						product range. Since its inception in 2010, Quba Group
						was type casted as a door handles company. As the
						company grew, we catered to various segments in the
						Builders Hardware Industry with premium quality products
						for our elite clients all over India. Quba Group is a
						design-led manufacturer that builds and designs premium
						architectural hardware for doors, kitchen interiors,
						bathroom fittings, and more. As a market leader in the
						Indian Builders Hardware Industry, our esteemed clients
						are architects, interior designers, furniture designers,
						and homeowners. As a company, we roll up our sleeves and
						create hardware that improves everyday functioning
						aesthetically.
					</Paragraph>
				</TextContainer>
			</Row>
		</div>
	);
};

export default AboutUs;
