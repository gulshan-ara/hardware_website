import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const ContactUs = () => {
	return (
		<Container style={{ marginTop: "50px", padding: "20px" }}>
			<Row>
				<Col md={12}>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/image_1.png"}
						alt="Contact Us"
						style={{ width: "100%", marginBottom: "20px" }}
					/>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={5} className="mb-4">
					<div className="form-container">
						<h2>Contact Us</h2>
						<Form>
							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your name"
									style={{ marginBottom: "10px" }}
								/>
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									style={{ marginBottom: "10px" }}
								/>
							</Form.Group>

							<Form.Group controlId="formBasicMessage">
								<Form.Label>Message</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Enter your message"
									style={{ marginBottom: "10px" }}
								/>
							</Form.Group>

							<button
								type="submit"
								className="btn btn-primary btn-block"
								style={{ marginTop: "10px", padding: "10px" }}
							>
								Submit
							</button>
						</Form>
					</div>
				</Col>
				<Col md={5} className="mb-4">
					<div className="address-container">
						<h2 className="text-center">Our Address</h2>
						<p className="text-center">123 Street Name,</p>
						<p className="text-center">City, State, ZIP Code</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactUs;
