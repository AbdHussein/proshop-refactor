import { CSSProperties } from 'react';
import { StyledImage } from './style';
import img from '../../assets/Images/defaultProduct.png';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
  fit?: string;
  loading?: 'eager' | 'lazy' | undefined;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  variant?: 'circle' | 'square';
  border?: boolean;
  responsive?: boolean;
  src: any;
  style?: CSSProperties;
}

const Image: React.FC<IProps> = ({ src, ...props }) => (
  <StyledImage src={[src, img]} {...props} />
);

export default Image;
