
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
const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Input = styled.input`
  background-color: #fff;
  border-radius: 2px;
  margin: 0;
  height: 30px;
  border: 0px;
  width: 80%;
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

const CommandLine = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      {isOpen && (
        <ButtonWrapper>
          <Input />
          <SubmitButton>Submit</SubmitButton>
        </ButtonWrapper>
      )}
      {!isOpen && <ButtonWrapper><Button onClick={toggleIsOpen}>Give commands</Button></ButtonWrapper>}
    </Wrapper>
  );
};

export default CommandLine;
