
import React, { useState } from 'react';
import styled from 'styled-components';
import Robot from './Robot';

const Wrapper = styled.div`
	height: 80%;
	width: 80%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

	@media only screen and (max-width: 495px) {
    width: 100vw;
  }
`;
const InternalGridLayout = styled.div`
  display: grid;
  grid-template-columns: 5fr;
  // grid-template-rows: 5fr;
`;
const GridElement = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
`;


const CommandLine = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <InternalGridLayout>
        <GridElement column={1} row={1} />
        <GridElement column={2} row={1} ><Robot /></GridElement>
        <GridElement column={3} row={1} />
        <GridElement column={4} row={1} />
        <GridElement column={5} row={1} />

        <GridElement column={1} row={2} />
        <GridElement column={2} row={2} />
        <GridElement column={3} row={2} />
        <GridElement column={4} row={2} />
        <GridElement column={5} row={2} />

        <GridElement column={1} row={3} />
        <GridElement column={2} row={3} />
        <GridElement column={3} row={3} />
        <GridElement column={4} row={3} />
        <GridElement column={5} row={3} />

        <GridElement column={1} row={4} />
        <GridElement column={2} row={4} />
        <GridElement column={3} row={4} />
        <GridElement column={4} row={4} />
        <GridElement column={5} row={4} />

        <GridElement column={1} row={5} />
        <GridElement column={2} row={5} />
        <GridElement column={3} row={5} />
        <GridElement column={4} row={5} />
        <GridElement column={5} row={5} />
      </InternalGridLayout>
    </Wrapper>
  );
};

export default CommandLine;
