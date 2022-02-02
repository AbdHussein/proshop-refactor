import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 80%;
  height: 100%;
  margin-inline: auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.text?.primary};
`;
