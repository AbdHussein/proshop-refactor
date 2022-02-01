import Wrapper from './style';
import { IPropTypography } from './interface';

const Typography: React.FC<IPropTypography> = ({
  variant = 'p',
  fontFamily = 'Mulish',
  ...props
}: IPropTypography) => {
  return (
    <Wrapper as={variant} font-family={fontFamily} {...(props as any)}>
      {props.children}
    </Wrapper>
  );
};
export default Typography;
