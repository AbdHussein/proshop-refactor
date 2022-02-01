import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Column } from '../Col';
import { FlexBox } from '../Row';
import { Container } from '..';

export const InnerSection = styled(Column)`
  margin: 0 auto;
  max-width: 1640px;
  width: 100%;
`;
export const ListNav = styled(Container)`
  background-color: #121212;
  height: auto;
  z-index: 999;
  padding: 0 5%;
  @media (max-width: 900px) {
  }
  position: fixed;
  top: 0;
`;
export const Badge = styled('div')`
  background: #fcdd06;
  border-radius: 50%;
  color: #242424;
  text-align: center;
  font-family: normal normal normal 10px/13px Muli;
  height: 22px;
  width: 22px;
  z-index: 10;
  right: 8px;
  position: absolute;
  top: -5px;
  z-index: 1;
`;

export const SearchButton = styled(FlexBox)`
  cursor: pointer;
  align-items: center;
  background: ${props => props.theme.primary?.main};
  border-radius: 6px;
  display: flex;
  height: 42px;
  justify-content: center;
  width: 21.5%;
`;
export const StyledSearchIcon = styled(AiOutlineSearch)`
  font-size: 18;
  margin-right: 10px;
`;

export const NavBox = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 36.7%;
  background: #fff;
  border-radius: 6px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavIcon = styled('div')`
  display: flex;
  width: 36.7%;
  border-radius: 6px;
  justify-content: center;
  background: none;
`;

export const CustomLink = styled(Link)`
  color: none;
  position: relative;
  text-decoration: none;
`;

export const Logo = styled('img')`
  height: 50px;
  object-fit: cover;
  opacity: 1;
  width: 180px;
`;
export const IconList = styled('li')`
  cursor: pointer;
  display: inline;
  margin-left: 2rem;
  color: #fff;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  & svg {
    margin-bottom: 7px !important;
    width: 25px;
    height: 25px;
    border: none;
    outline: none;
  }
  span {
    color: #000;
    background: #06aefc;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 10rem;
    justify-content: center;
    font-size: 18px;
  }
`;
export const Hamburger = styled.div`
  display: none;
  padding: 5%;
  text-align: right;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    top: auto;
  }
`;
export const SearchInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 6px;
  text-indent: 15px;
  height: 40px;
  width: 36.7%;
  &:focus {
    border: none;
    outline: none;
  }
  /* ::placeholder,
  ::-webkit-input-placeholder {
    color: black;
  }
  :-ms-input-placeholder {
    color: black;
  }*/
`;
export const List = styled('ul')`
  text-decoration: none;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ListItem = styled('li')`
  color: ${props => props.theme.text?.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  display: flex;
  letter-spacing: 0.2px;
  list-style: none;
  margin-left: 20px;
  opacity: 1;
  text-decoration: none;
  align-items: center;
`;

export const StyleObj: CSSProperties = {
  fontSize: 22,
  color: '#FCDD06',
  fill: '#FFF',
  margin: '0px auto',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'space-between',
  marginBottom: '10px',
};

export const IConsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
