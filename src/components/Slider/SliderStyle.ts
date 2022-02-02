import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Button/ButtonStyle';
import { FlexBox, Row, Column } from '../Row';
import { ContainerWrapper } from '../Container/style';
import { Container, Image, Typography } from '..';

export const SectionSlider = styled(FlexBox)``;

export const SliderSection = styled(ContainerWrapper)`
  /* background-color: ${props => props.theme.background.dufault}; */
  margin: 0 auto;
  overflow: hidden;
  flex-wrap: wrap;
  padding-top: 80px;
  padding-bottom: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin: auto;
    padding-top: 130px;
  }
`;
export const ShopeButton = styled(Button)`
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: #242424;
  height: 56px;
  opacity: 1;
  outline: none;
  font-family: mulish;
  text-transform: uppercase;
  width: 220px;
`;
export const PriceText = styled<any>(Typography)`
  color: #242424;
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: mulish;
  font-weight: 400;
`;

export const DescriptionText = styled(PriceText)`
  color: #242424;
  font-size: 2rem;
  font-family: mulish;
  margin-bottom: 42px;
  font-weight: 400;
`;

export const NameText = styled(PriceText)`
  color: #242424;
  font-size: 3.7rem;
  font-weight: 900;
  margin-bottom: 10px;
`;

export const ImageSlider = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ButtonHero = styled(Link)`
  color: #242424;
  background: #fcdd06;
  font-size: 22px;
  height: 56px;
  outline: none;
  margin-top: 10px;
  border-radius: 20px;
  opacity: 1;
  text-transform: uppercase;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  letter-spacing: 1.28px;
  font-family: mulish;
  max-width: 220px;
`;

export const WrapperImageHero = styled(Column)`
  max-width: 627px;
  margin: 10px 0;
`;

interface IDot {
  isGrey: boolean;
  width?: string;
}

export const Dot = styled('div')<IDot>`
  background: ${props => (props.isGrey ? '#70707030' : '#FCDD06 ')};
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
`;

export const CategDots = styled(Dot)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

interface IArrow {
  isLeft?: boolean;
  color?: string;
}
// width="auto" JC="center" item="center" style={{marginBottom:"32px"}}

export const RowArrowWrapper = styled(Row)`
  width: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Arrow = styled('div')<IArrow>`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ContentContainer = styled(Container)`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 0 auto;
  background: transparent;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding-bottom: 50px;
  }
`;
