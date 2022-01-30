import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Container } from '../../components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 17px;
  right: 1em;
  color: #242424;
  &:hover {
    cursor: pointer;
  }
`;

export const OldPrice = styled.div`
  position: absolute;
  top: 3em;
  right: 1.2em;
  @media only screen and (max-width: 767px) {
    top: unset;
    bottom: 1.6em;
  }
`;

export const ItemTitle = styled(Link)`
  width: 60%;
  text-decoration: none;
  color: #242424;
  @media only screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const WrapCounter = styled.div`
  background: #fff;
  @media only screen and (max-width: 767px) {
    margin-bottom: 1em;
  }
`;

export const CartContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;

export const ItemContainer = styled(Container)`
  display: ${props => (props.display === '0' ? 'none' : 'flex')};
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 25rem;
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const ImgContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const TotalContainer = styled(Container)`
  width: 30%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 25rem;
    margin: 0;
  }
`;
