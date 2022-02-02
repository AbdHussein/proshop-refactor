import styled from 'styled-components';

export const PathWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1em;
  // padding-bottom: 0;
  letter-spacing: 0.96px;
`;

export const PathName = styled.h2`
  color: ${props => props.theme.text?.primary};
  font-size: 1rem;
  font-weight: 500;
  padding-left: 5px;
`;

export const PathLink = styled.button`
  padding: 0;
  border: 0;
  background: none;
  outline: none;
  color: ${props => props.theme.text?.secondary};
  font-size: 1rem;
  letter-spacing: 0.96px;
  font-weight: 500;
  &:hover {
    color: rgba(112, 112, 112, 0.8);
    cursor: pointer;
  }
`;
