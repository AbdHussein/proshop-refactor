import React, { ReactNode } from 'react';
// import { IconContext } from 'react-icons';
// import { useTheme } from 'styled-components';

interface IProps {
  // color?: string;
  size?: string;
  icon: ReactNode;
}

export const Icon = ({ size = '1em', icon }: IProps) => {
  // const globalStyle = useTheme();
  return <>{icon}</>;
};

export default Icon;
