
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

const Grid = ({ data, numberOfRows, numberOfColumns }) => (
  <Wrapper>
    <InternalGridLayout numberOfRows={numberOfRows} numberOfColumns={numberOfColumns}>
      {
        // The operation below generates an array with N amount of items.
        // We do it twice, once to generate an array for the rows, and one for the columns
        Array.apply(null, Array(numberOfRows)).map((_, rowIndex) =>
          Array.apply(null, Array(numberOfColumns)).map((_, columnIndex) => (

            <GridElement

              // Creates a unique number for every grid element
              key={columnIndex + (rowIndex * numberOfRows)}

              // We pass the number of the column and row to the css styling
              // to determine its placement in the DOM with 'display: grid'
              column={columnIndex + 1}
              row={rowIndex + 1}
            >
              { // checks if the current grid element should contain the robot
                ((data.coordinates.x === columnIndex + 1) &&
                  (data.coordinates.y === rowIndex + 1)) && (
                    <Robot rotation={data.rotation} />
                  )
              }
            </GridElement>

          ))
        )
      }
    </InternalGridLayout>
  </Wrapper>
);

export default Grid;
