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

export const NavLink = styled(Link)`
  font-size: 24px;
  color: #242424;
  text-decoration: none;
  &:hover {
    color: rgba(36, 36, 36, 0.7);
  }
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const OutLink = styled(NavLink)`
  padding: 1em;
`;

export const SpanTitle = styled.span`
  font-size: 24px;
  color: #707070;
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const DataValue = styled.h4`
  font-size: 24px;
  font-weight: 500;
  color: #000000;
  overflow-wrap: anywhere;
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ProfileContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    margin-left: 0;
    margin-top: 0;
  }
`;

export const DashboardContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    margin-bottom: 2em;
    width: 100%;
    max-width: 25rem;
    flex-wrap: nowrap;
  }
`;

export const DashImgContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoContainer = styled(Container)`
  margin-left: 2em;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-left: 0;
    max-width: 25rem;
  }
`;

export const InfoBoxContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;

export const InfoDetailsContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-wrap: nowrap;
    margin-top: 0;
  }
`;

export const ImageContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0;
  }
`;
