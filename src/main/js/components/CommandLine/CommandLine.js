
import React, { useState } from 'react';
import styled from 'styled-components';

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
const Input = styled.textarea`
  border-radius: 2px;
  margin: 0;
  padding: 10px;
  border: 0px;
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const script = `
  POSITION 1 1 EAST //sets the position of the robot, pointing east
  FORWARD 3 //lets the robot do 3 steps forward
  WAIT //lets the robot do nothing
  TURNAROUND //lets the robot turn around
  FORWARD 1 //lets the robot do 1 step forward
  RIGHT //lets the robot turn right
  FORWARD 2 //lets the robot do 2 steps forward
`;

const CommandLine = ({ onSubmit }) => {
  const handleSubmit = () => onSubmit(script);
  return (
    <Wrapper>
      <ButtonWrapper>
        <Input defaultValue={script} />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CommandLine;
