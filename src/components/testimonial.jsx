import React, { useState } from "react";
import styled from "styled-components";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Doe",
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Alice Smith",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

// Styled components
const Container = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  text-align: center; /* Center text horizontally */
`;

const Name = styled.p`
  color: #333;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px; /* Add space between name and quote */
`;

const Quote = styled.p`
  margin: 0; /* Remove default margin */
  font-style: italic;
  font-size: 20px;
  line-height: 1.5; /* Adjust line height for readability */
  max-width: 80%; /* Limit quote width for smaller screens */
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #999; /* Grey color */
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

// Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
      <PrevButton onClick={prevTestimonial}>{"<"}</PrevButton>
      <TestimonialCard>
        <Name>{testimonials[currentIndex].name}</Name>
        <Quote>{testimonials[currentIndex].quote}</Quote>
      </TestimonialCard>
      <NextButton onClick={nextTestimonial}>{">"}</NextButton>
    </Container>
  );
};

export default TestimonialCarousel;
