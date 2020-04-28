
import React, { useState } from 'react';
import styled from 'styled-components';
import Controller from './Controller';

const Wrapper = styled.div`
  display: flex;
  width: 80%;

  @media only screen and (max-width: 495px) {
    width: 100vw;
  }
`;
const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: flex-end;
  background-color: white;

  @media only screen and (max-width: 495px) {
    padding-right: 20px;
  }
`;
const Button = styled.button`
    background-color: #f60;
    font-weight: bold;
    padding: 0 5px;
    text-align: center;
    color: white;
    min-width: 120px;
    height: 30px;
    font-size: 20px;
    border: 0px;
    cursor: pointer;
`;
const SubmitButton = styled.button`
    background-color: #f60;
    font-weight: bold;
    padding: 0 5px;
    text-align: center;
    color: white;
    min-width: 80px;
    height: 30px;
    font-size: 20px;
    border: 0px;
    cursor: pointer;
    width: 20%;
`;

const initialCommands = [
  {
    // sets the position of the robot, pointing east
    action: 'POSITION',
    coordinates: {
      x: 1,
      y: 2,
    }
  },
  {
    // sets the robot pointing east
    action: 'EAST',
  },
  {
    // lets the robot do 3 steps forward
    action: 'FORWARD',
    value: 3
  },
  {
    // lets the robot do nothing
    action: 'WAIT',
  },
  {
    // lets the robot turn around
    action: 'TURNAROUND',
  },
  {
    // lets the robot do 1 step forward
    action: 'FORWARD',
    value: 1
  },
  {
    // lets the robot turn right
    action: 'RIGHT',
  },
  {
    // lets the robot do 2 steps forward
    action: 'FORWARD',
    value: 2
  }
];

const CommandLine = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [commands, setCommands] = useState(initialCommands);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const handleSubmit = () => onSubmit(commands);

  return (
    <Wrapper>
      {isOpen && (
        <ButtonWrapper>
          <Controller />
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </ButtonWrapper>
      )}
      {!isOpen && <ButtonWrapper><Button onClick={toggleIsOpen}>Give commands</Button></ButtonWrapper>}
    </Wrapper>
  );
};

export default CommandLine;
