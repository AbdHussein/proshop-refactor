import styled from 'styled-components';
import { Typography } from '..';
import { Column } from '../Row/index';

export const Title = styled(Typography)`
  color: #242424;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-family: mulish;
  // margin-top: 22px;
`;

interface IDivider {
  width: string;
  height: string;
  color?: string;
}

export const Divider = styled('hr')<IDivider>`
  color: #d3cdcd;
  font-weight: bold;
  margin: 0px;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
`;

export const ColumnCusom = styled(Column)`
  margin-top: 62px;
`;
