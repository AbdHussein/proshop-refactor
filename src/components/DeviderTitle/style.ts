import styled from 'styled-components';
import { Typography } from '..';
import { Column } from '../Row/index';

export const Title = styled(Typography)`
  color: ${props => props.theme.text?.primary};
  font-size: 2rem;
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

export const Divider = styled('div')<IDivider>`
  background-color: ${props => props.color || '#707070'};
  font-weight: bold;
  margin: 0px;
  min-width: 200px;
  width: ${props => props.width};
  height: ${props => props.height || '.1px'};
  color: ${props => props.color};
`;

export const ColumnCusom = styled(Column)`
  margin-top: 62px;
`;
