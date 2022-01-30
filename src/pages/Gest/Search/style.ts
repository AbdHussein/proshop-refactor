import styled from 'styled-components';

export const FlexBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: auto;
  background: ${props => props.color};
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardsBox = styled(FlexRow)`
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 1800px;
  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;
