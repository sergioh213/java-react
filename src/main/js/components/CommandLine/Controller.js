
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 2px;
  margin: 0;
  padding: 10px;
  border: 0px;
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const ControllerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: 36px 36px 36px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
  cursor: pointer;
`;
const Icon = styled.div`
  font-size: 35px;
  color: darkgrey;
  position: relative;

  ${({ rotation = 0 }) => `
    transform:rotate(${rotation}deg);
    -ms-transform:rotate(${rotation}deg);
    -webkit-transform:rotate(${rotation}deg);
  `}
`;
const ControllerInstructions = styled.p`
  color: darkgrey;
  font-weight: 400;
  text-align: center;
  width: 100%;
  margin: 10px 0;
`;

const Controllers = () => (
  <Wrapper>
    <ControllerSection>
      <ButtonsGrid>

        <Button row={1} column={2}>
          <Icon rotation={0} style={{ bottom: 5 }}>▲</Icon>
        </Button>

        <Button row={2} column={3}> 
          <Icon rotation={90} style={{ left: 2, bottom: 3 }}>▲</Icon>
        </Button>

        <Button row={2} column={1}>
          <Icon rotation={270} style={{ right: 2, bottom: 3 }}>▲</Icon>
        </Button>

      </ButtonsGrid>
      <ControllerInstructions>Movement</ControllerInstructions>
    </ControllerSection>

    <ControllerSection>
      <ButtonsGrid>

        <Button row={1} column={2}>
          <Icon rotation={0} style={{ bottom: 5 }}>▲</Icon>
        </Button>

        <Button row={2} column={3}>
          <Icon rotation={90} style={{ left: 2, bottom: 3 }}>▲</Icon>
        </Button>

        <Button row={2} column={1}>
          <Icon rotation={270} style={{ right: 2, bottom: 3 }}>▲</Icon>
        </Button>

      </ButtonsGrid>
      <ControllerInstructions>Facing direction</ControllerInstructions>
    </ControllerSection>
  </Wrapper>
);

export default Controllers;
