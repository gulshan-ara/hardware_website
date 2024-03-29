import React from 'react';
import styled from 'styled-components';

// Define the styled components
const TransparentBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.5); /* Transparent white background */
  padding: 20px; /* Adjust padding as needed */
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between; /* Cards will be evenly spaced */
`;

const Card = styled.div`
  width: 200px; /* Adjust card width as needed */
  height: 300px; /* Adjust card height as needed */
  background-color: white;
  border-radius: 10px; /* Rounded corners for the cards */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add a slight shadow for depth */
`;

// Define the TransparentCardRow component
const TransparentCardRow = () => {
  return (
    <TransparentBackground>
      <CardRow>
        <Card></Card>
        <Card></Card>
      </CardRow>
    </TransparentBackground>
  );
};

export default TransparentCardRow;
