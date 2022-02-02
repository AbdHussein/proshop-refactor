import styled from 'styled-components';
import { IStyleButton } from './IStyleButton';

// normal normal bold 16px/20px

export const ButtonStyle = styled.button<IStyleButton>(
  ({
    width = 'none',
    height = 'none',
    padding = '.5em 1em',
    borderRadius = '10px',
    border = 'none',
    fontWeight = 'bold',
    background,
    color = '#242424',
    fontSize = '16px / 220px',
    cursor = 'pointer',
    letterSpace = '0px',
    margin = 'none',
    brand = false,
    ...props
  }) => ({
    width: `${width}`,
    height: `${height}`,
    padding: `${padding}`,
    borderRadius: `${borderRadius}`,
    border: `${border}`,
    fontWeight: `${fontWeight}`,
    background: `${
      background ||
      (brand ? props.theme.primary?.main : props.theme.secondary?.main)
    }`,

    color: `${color || '#242424'}`,
    fontSize: `${fontSize}`,
    cursor: `${cursor}`,
    letterSpacing: `${letterSpace}`,
    alignItems: 'center',
    margin: `${margin}`,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
  }),
);

export const Button = styled(ButtonStyle)`
  background: ${props =>
    props.background === 'outline'
      ? 'none'
      : props.background === 'secondary'
      ? props.theme.secondary?.main
      : props.theme.primary?.main};
  color: '#242424';
  &:hover {
    background: ${props => props.theme.primary?.main};
    opacity: 0.9;
  }
  & svg {
    fill: ${props => props.theme.text?.primary};
  }
`;

export const AddReviewButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.primary?.main};
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.primary?.main};
  }
`;
