import styled from 'styled-components';

interface IProps {
  color?: string;
}

const StarIcon = styled.i<IProps>(({ color = '#f8e825', ...props }) => ({
  color: `${color}`,
  fontSize: `2rem`,
}));

export default StarIcon;
