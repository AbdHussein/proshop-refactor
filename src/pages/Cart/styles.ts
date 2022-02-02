import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components';

export const CloseIcon = styled.i`
  position: absolute;
  top: 17px;
  right: 1em;
  color: #242424;
  & svg {
    fill: ${props => props.theme.text?.primary};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const OldPrice = styled.div`
  /* position: absolute; */
  /* top: 3em; */
  /* right: 1.2em; */
  @media only screen and (max-width: 767px) {
    /* top: unset; */
    /* bottom: 1.6em; */
  }
`;

export const ItemTitle = styled(Link)`
  width: 60%;
  text-decoration: none;
  color: #242424;
  align-self: center;
  @media only screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const WrapCounter = styled.div`
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
  display: flex;
  background: ${props => props.theme.background?.paper};
`;

export const ImgContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const TotalContainer = styled(Container)`
  background: ${props => props.theme.background?.paper};
  width: 30%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 25rem;
    margin: 0;
  }
`;
