import React, { HTMLAttributes, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { Container } from '..';
import CircleStyle from './styles';

export interface IProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  style?: CSSProperties;
  size?: string;
  bgColor?: string;
  borderColor?: string;
  active?: boolean;
}

const Circle = (props: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(!isActive);
  return <CircleStyle onClick={toggleActive} {...props} active={isActive} />;
};

Circle.defaultProps = {
  size: '2.5rem',
  bgColor: '#EDEAE3',
  borderColor: '#242424',
};

const GroupCircle = ({ colors, setColorActive }) => {
  const [active, setActive] = useState(-1);
  return (
    <Container margin=".5em 0" min-Height="3.5rem">
      {colors.map((color, index) => (
        <CircleStyle
          bgColor={color}
          active={index === active}
          onClick={() => {
            setActive(index);
            setColorActive(color);
          }}
          style={{
            margin: index > 0 ? '0 .5rem' : '0',
          }}
          size="2.5rem"
          key={index}
          borderColor="#FCDD06"
        />
      ))}
    </Container>
  );
};

export { GroupCircle, Circle };
