import styled from 'styled-components';
import { Container, Typography } from '../../../components';

export const WrapperRemmber = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const LoginText = styled(Typography)`
  font-size: 35px;
  font-weight: bold;
  color: #242424;
  margin-bottom: 25px;
  font-family: mulish;
`;
export const LoginSubText = styled('p')`
  font-size: 25px;
  width: 35rem;
  color: #70707070;
  font-family: mulish;
  margin-bottom: 30px;
`;

export const LeftLogin = styled('div')`
  display: flex;
  flex: 1;
`;
export const RightLogin = styled('div')`
  display: flex;
  flex: 3;
  margin-left: 174px;
  justify-content: center;
`;

export const ImageShape = styled.img`
  height: 729px;
  width: 857px;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled('div')`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  overflow-y: hidden;
`;

export const Remmber = styled('p')`
  font-size: 22px;
  letter-spacing: 0.88px;
  color: #707070;
  opacity: 0.7;
  margin-left: 13px;
`;
export const ForgotPassword = styled(Typography)`
  font-size: 18px;
  letter-spacing: 0.88px;
  color: #242424;
  text-align: center;
  font-family: mulish;
  margin-bottom: 1rem auto;
`;

export const ButtonSuginup = styled('button')`
  width: 200px;
  height: 56px;
  border: 3px solid #fcdd06;
  border-radius: 20px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  letter-spacing: 0.88px;
  color: #242424;
  outline: none;
  align-self: center;
  margin-top: 1rem;
`;
export const ButtonLogin = styled('button')`
  width: 100%;
  min-height: 40px;
  border: 3px solid ${props => props.theme?.primary?.lightYallow};
  border-radius: 20px;
  opacity: 1;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  letter-spacing: 0.88px;
  color: #242424;
  outline: none;
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 6px;
`;

export const FormContainer = styled(Container)`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerLogin = styled(Container)`
  height: 90vh;
  padding: 0;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
  }
`;
