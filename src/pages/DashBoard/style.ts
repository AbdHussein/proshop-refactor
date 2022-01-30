import styled from 'styled-components';
import { Container } from '../../components';
import { Button } from '../../components/Button/ButtonStyle';

export const ContainAgGrid = styled('div')`
  height: 500px;
  width: 85.5%;
  margin: 140px auto;
  border: none !important;
`;

export const Btn = styled(Button)`
  background: #fcdd06;
  color: #242424;
  width: 15%;
  float: right;
  margin: 10px 3%;
`;

export const DashContainer = styled(Container)`
  justify-content: space-between;
  width: 100%;
  margin: -50px auto;
`;
