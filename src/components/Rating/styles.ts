import styled from 'styled-components';

interface IProps {
  color?: string;
}

const StarIcon = styled.i<IProps>(props => ({
  color: `${props.theme.primary?.main}`,
  fontSize: `2rem`,
}));

export default StarIcon;
