import styled from 'styled-components';
import { Img } from 'react-image';

type sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const getImageWidth = (size: sizes) => {
  switch (size) {
    case 'sm':
      return '7em';
    case 'md':
      return '15em';
    case 'lg':
      return '25rem';
    case 'xl':
      return '35em';
    case 'xxl':
      return '45em';
    case 'xxxl':
      return '55em';
    default:
      return '100em';
  }
};

export const StyledImage = styled(Img)<any>`
  width: ${props =>
    props.width || (props?.size && getImageWidth(props.size)) || '100%'};
  height: ${props => props.height || '100%'};
  object-position: center;
  display: block;
  object-fit: contain;
  max-width: 100%;

  border: ${props => props?.border && '1px solid grey'};
  border-radius: ${props =>
    props.variant === 'circle'
      ? '50%'
      : props.variant === 'square'
      ? '12px'
      : '0'};
  max-height: ${props => props.maxHeight || props?.size || '100%'};
  margin: 0 auto;
  ${props =>
    props.loading === 'eager' &&
    `
  &:not([src]):not([srcset]):not([sizes]) {
    content: "";
    display: block;
    padding-bottom: 100%;
    background-image: url(${props.src});
    background-size: cover;
    background-position: center;
  }
`}
  @media (max-width: 768px) {
    display: ${props => (props.responsive ? 'none' : 'block')};
  }
`;
