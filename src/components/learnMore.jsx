import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faStar,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #1996ed;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }
`;

const LeftSide = styled.div`
	flex:1;
  width: 100%;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    width: auto;
    margin-right: 20px;
    margin-bottom: 0;
    align-self: center;
    text-align: left;
		padding-left: 30px;
  }
`;

const RightSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #fff;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Headline = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 500;
`;

const Subheadline = styled.p`
  margin: 10px 0;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

// Component
const RowWithColumn = () => {
  return (
    <Container>
      <LeftSide>
        <h2 style={{ fontSize: 40 }}>Looking for something special?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>Learn More</Button>
      </LeftSide>
      <RightSide>
        <Item>
          <Icon>
            <FontAwesomeIcon icon={faCoffee} />
          </Icon>
          <div>
            <Headline>Item 1 Headline</Headline>
            <Subheadline>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </Subheadline>
          </div>
        </Item>
        <Item>
          <Icon>
            <FontAwesomeIcon icon={faStar} />
          </Icon>
          <div>
            <Headline>Item 2 Headline</Headline>
            <Subheadline>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </Subheadline>
          </div>
        </Item>
        <Item>
          <Icon>
            <FontAwesomeIcon icon={faCheckCircle} />
          </Icon>
          <div>
            <Headline>Item 3 Headline</Headline>
            <Subheadline>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </Subheadline>
          </div>
        </Item>
      </RightSide>
    </Container>
  );
};

export default RowWithColumn;
