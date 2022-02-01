import styled from 'styled-components';

const getTypographySize = (variant: string) => {
  switch (variant) {
    case 'h1':
      return '1.8em';
    case 'h2':
      return '1.3em';
    case 'h3':
      return '1em';
    case 'h4':
      return '.8em';
    case 'h5':
      return '.5em';
    case 'h6':
      return '0.4em';
    default:
      return '1em';
  }
};

const Wrapper = styled('p')<any>`
  /* color: ${props => props.color || 'black'}; */

  font-weight: ${props => (props?.bold || props?.variant === 'h2' ? 750 : 500)};
  color: ${props =>
    props
      ? props.color
      : props.theme
      ? props.theme.Typography.color
      : '#242424'};
  font-size: ${props =>
    props?.fontSize || getTypographySize(props?.variant || '')};
  line-height: ${props => (props?.bold ? 1.1 : 1.25)};
  font-family: ${props => props?.['font-family'] || ' mulish'};

  text-align: ${props => props?.['text-align'] || 'left'};
`;

export default Wrapper;
