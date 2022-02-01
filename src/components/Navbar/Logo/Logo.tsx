import { Link } from 'react-router-dom';
import Typography from '../../Typography';
import { LogoSt } from './LogoSt';

export default function Logo() {
  return (
    <LogoSt as={Link} to="/">
      <Typography
        color="#edc298"
        font-family="mulish"
        display="inline"
        style={{ fontWeight: '900' }}
      >
        Pro
        <Typography
          color="#FFF"
          font-family="mulish"
          style={{ display: 'inline', fontWeight: '900' }}
        >
          Shop
        </Typography>
      </Typography>
    </LogoSt>
  );
}
