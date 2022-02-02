import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;

  & > label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5rem;
    gap: 5px;
  }
`;
