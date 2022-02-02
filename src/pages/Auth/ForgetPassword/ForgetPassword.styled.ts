import styled from 'styled-components';
import Button from '../../../components/Button';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 175px;
  margin: 140px;
  & img {
    margin-block: auto;
    width: 500px;
  }
  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
    & img {
      display: none;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 5em;
  gap: 50px;
  margin-block: 2em;
  & form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const ForgetPasswordButton = styled(Button)`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-transform: capitalize;
`;
