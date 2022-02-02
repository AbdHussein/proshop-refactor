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
  font-weight: ${props => (props?.bold || props?.variant === 'h2' ? 700 : 500)};
  color: ${props =>
    props.color === 'disabled'
      ? props.theme.text.disabled
      : props.color === 'secondary'
      ? props.theme.text.secondary
      : props.theme.text?.primary};
  font-size: ${props =>
    props?.fontSize || getTypographySize(props?.variant || '')};
  line-height: ${props => (props?.bold ? 1.1 : 1.25)};
  font-family: ${props => props?.['font-family'] || ' mulish'};

  text-align: ${props => props?.['text-align'] || 'left'};
`;

export default Wrapper;
