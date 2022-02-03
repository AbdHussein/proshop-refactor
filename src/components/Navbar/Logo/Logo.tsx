import { Link } from 'react-router-dom';
import Typography from '../../Typography';
import { LogoSt } from './LogoSt';

export default function Logo() {
  return (
    <LogoSt as={Link} to="/">
      <Typography
        font-family="mulish"
        display="inline"
        style={{ fontWeight: '900', color: '#edc298' }}
      >
        Pro
        <Typography
          font-family="mulish"
          style={{ display: 'inline', fontWeight: '900', color: '#FFF' }}
        >
          Shop
        </Typography>
      </Typography>
    </LogoSt>
  );
}
