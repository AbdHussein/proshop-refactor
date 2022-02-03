import { ReactNode, CSSProperties } from 'react';

export interface IStyleButton {
  style?: CSSProperties;
  children: ReactNode;
  minWidth?: string;
  borderRadius?: string;
  border?: string;
  fontWeight?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  cursor?: string;
  width?: string;
  height?: string;
  padding?: string;
  letterSpace?: string;
  margin?: string;
  brand?: boolean;
  type?: string;
  loading?: boolean;
}
