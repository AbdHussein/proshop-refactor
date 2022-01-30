import styled, { createGlobalStyle } from 'styled-components';
import Select from 'react-select';
import { Container } from '../../components';
import { WarperFileBox } from '../../components/Form/checkBox/style';
import { Input } from '../../components/Form/inputController/style';

export const ProductContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 1em;
  }
`;

export const ImagesContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const WarperFile = styled(WarperFileBox)`
  flex-direction: column;
  width: 100%;
  height: 15rem;
  justify-content: center;
`;

export const FormContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    flex-basis: unset;
  }
`;

export const InputsContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Textarea = Input.withComponent('textarea');
export const SelectStyle = styled(Select)`
  width: 100%;
`;
