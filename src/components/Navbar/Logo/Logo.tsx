import { Link } from 'react-router-dom';
import Typography from '../../Typography';
import { LogoSt } from './LogoSt';

export default function Logo() {
  return (
    <LogoSt as={Link} to="/">
      <Typography
        // color="#FCDD06"
        variant="h3"
        font-family="mulish"
      >
        ProShop
      </Typography>
    </LogoSt>
  );
}
