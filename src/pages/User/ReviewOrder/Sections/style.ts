import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Column, Container, Divider, Typography } from '../../../../components';

export const ReviewText = styled(Typography)`
  font-family: normal normal 900 32px/15px Mulish;
  letter-spacing: 1.28px;
`;
export const OrderDetailsText = styled(ReviewText)`
  font-family: normal normal 900 32px/15px mulish;
  letter-spacing: 1.28px;
  font-size: 2rem;
  font-weight: bold;
`;
export const TextFooter = styled('p')`
  font-size: 16px;
  letter-spacing: 0.32px;
  color: ${props => props.theme.text?.primary};
  opacity: 1;
`;
export const ChangeText = styled(Link)`
  font-size: 22px;
  letter-spacing: 0.44px;
  color: #707070;
  opacity: 1;
  text-decoration: underline;
  font-family: mulish;
`;

interface IBoxNumber {
  isActive: boolean;
}
export const BoxNumber = styled('div')<IBoxNumber>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  font-size: 15px;
  font-weight: bold;
  margin-right: 9px;
  height: 2em;
  background: ${props =>
    props.isActive
      ? `${props.theme?.primary?.main}; 0% 0% no-repeat padding-box`
      : '#707070 0% 0% no-repeat padding-box'};
  color: ${props => (props.isActive ? '#242424' : '#FFFFFF ')};
`;

export const TextActive = styled(Typography)<IBoxNumber>`
  font-size: 1.1rem;
  font-family: normal normal bold 22px/15px Mulish;
  letter-spacing: 0.88px;
  width: auto;
  color: ${props => (props.isActive ? '#242424' : '#707070')};
`;

export const WrapperReviewRow = styled('div')`
  display: flex;
  margin-top: 0.8rem;
  align-items: center;
  width: 100%;
`;
export const InnerSection = styled(Column)`
  align-items: start;
  justify-content: start;
  margin: 0 auto;
  width: 100%;
  margin-top: 1.5rem;
`;

export const DividerTop = styled(Divider)`
  width: 100px;
  color: #f2f2f2;
  margin: 0 40px;
`;

export const DividerFull = styled(Divider)`
  margin: 0.2rem 0;
  width: 100%;
  position: relative;
`;

export const WrapperCard = styled('div')`
  display: flex;
  width: 100%;
  background: none;
  justify-content: space-between;
  margin-top: 1em;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const ProductContainer = styled.div`
  overflow: auto;
  width: 60%;
  height: 200px;
  overflow-x: hidden;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const OrderWrapper = styled(WrapperCard)`
  width: 90%;
  margin: 10px auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const OrfferSection = styled(Column)`
  width: 90%;
  height: 700px;
  // overflow: auto;
  margin: 50px auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;
export const LeftSection = styled('div')`
  background: #f2f2f2;
  border-radius: 16px;
  opacity: 1;
  padding: 25px 17px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;
export const RightSection = styled(LeftSection)`
  margin-left: 30px;
  width: 40%;
  padding: 0.5rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 15px auto;
    padding: 30px;
  }
`;
export const RightSectionTowReview = styled(LeftSection)`
  /* flex: 2; */
  margin-left: 30px;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 15px auto;
    padding: 15px;
  }
`;
export const InnerOverFlow = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  max-height: 15em;
  overflow-x: hidden;
  border-radius: 15px;
  width: 100%;
`;
export const RightSectionPlace = styled(RightSectionTowReview)`
  width: 40%;

  height: 90%;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 10px;
    height: 240px;
  }
`;

export const ShapeAddress = styled(Typography)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  letter-spacing: 0.88px;
  letter-spacing: 1.28px;
  color: #242424;
  opacity: 1;
  font-family: mulish;
  letter-spacing: 1.28px;
  color: #242424;
`;

export const ColumWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;
export const UserName = styled(Typography)`
  font-size: 1.375rem;
  letter-spacing: 0.88px;
  color: #000000;
  opacity: 1;
  margin-top: 16px;
  margin-bottom: 9px;
`;
export const Address = styled(Typography)`
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0.64px;
  color: #000000;
  opacity: 1;
  margin-top: 16px;
  width: 209px;
`;

export const WrapperRowInput = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const HeaderTitleRight = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;
export const FooterTitleRight = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 1rem auto;
  padding: 0 0.5rem;
  @media (max-width: 768px) {
    width: 90%;
    margin: 20px auto;
  }
`;

export const ImageCard = styled.img`
  width: 135px;
  height: 90px;
  opacity: 1;
  object-fit: cover;
`;

export const OrderItemsWrapper = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const OrderPriceWrapper = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  align-items: start;
`;

export const TextTitle = styled(Typography)`
  font-size: 1rem;
  letter-spacing: 0.44px;
  opacity: 1;
  margin-left: 10px;
  font-family: mulish;
  color: ${({ theme }) => theme.text?.primary};
`;

export const PriceText = styled(Typography)`
  font-size: 1rem;
  letter-spacing: 0.44px;
  color: ${props => props.theme?.text?.primary};
  padding-left: 10px;
  font-family: mulish;
`;
export const TotalPriceText = styled(Typography)`
  font-size: 1rem;
  letter-spacing: 0.44px;
  color: ${props => props.theme?.text?.primary};
  opacity: 1;
  font-family: mulish;
  padding-left: 10px;
`;
export const CountText = styled(Typography)`
  font-size: 1rem;
  letter-spacing: 0.44px;
  color: ${props => props.theme?.text?.secondary};
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const RevieworderButton = styled.button`
  width: 324px;
  height: 62px;
  background: ${props => props.theme?.primary?.main};
  border-radius: 10px;
  opacity: 1;
  display: flex;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  float: right;
  position: absolute;
  bottom: 1.8rem;
  right: 6rem;
`;

export const LeftOrderSection = styled(LeftSection)`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
