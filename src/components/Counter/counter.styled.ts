import styled from 'styled-components';

export const Count = styled.div`
  width: 40%;
  margin-block: 20px;
  display: flex;
  flex-direction: row;
`;

export const Value = styled.div`
  width: 6rem;
  padding: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
  color: ${props => props.theme.text?.primary};
`;
