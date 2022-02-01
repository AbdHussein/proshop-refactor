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
  color: ${props => props.theme.text?.primary};
  text-decoration: none;
  &:hover {
    color: rgba(36, 36, 36, 0.7);
  }
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const OutLink = styled(NavLink)`
  color: ${props => props.theme.text?.primary};
  padding: 1em;
`;

export const SpanTitle = styled.span`
  font-size: 20px;
  color: ${props => props.theme.text?.primary};
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const DataValue = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.text?.secondary};
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
  background-color: ${props => props.theme.background?.paper};
  @media only screen and (max-width: 767px) {
    margin-bottom: 2em;
    width: 100%;
    max-width: 25rem;
    flex-wrap: nowrap;
  }
`;

export const DashImgContainer = styled(Container)`
  gap: 40px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoContainer = styled(Container)`
  margin-left: 2em;
  background-color: ${props => props.theme.background?.paper};
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-left: 0;
    max-width: 25rem;
  }
`;

export const InfoBoxContainer = styled(Container)`
  justify-content: flex-start;
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
  & label {
    margin-top: 15px;
    margin-inline: auto;
  }
`;

export const UploadButton = styled.span`
  background-color: ${props => props.theme.primary?.main};
  border: none;
  border-radius: 10px;
  padding: 1em 2em;
  color: ${props => props.theme.text?.primary};
  font-weight: 700;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    color: ${props => props.theme.text?.secondary};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;
