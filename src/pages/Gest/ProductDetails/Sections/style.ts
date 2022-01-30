import styled from 'styled-components';
import { Image } from '../../../../components';

export const ProductImage = styled(Image)`
  &:hover {
    transform: scale(1.1) translateY(-5px);
    transition: all 0.1s ease-in-out;
  }
`;
