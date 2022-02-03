import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as PersonIcon } from '../../assets/icons/personIcon.svg';
import {
  NavBox,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
  ListNav,
  IconList,
  NavIcon,
  Badge,
  IConsContainer,
} from './NavBarStyles';
import Logo from './Logo/Logo';
import { useToken } from '../../utils/helper/useToken';
import { AppState } from '../../redux/store';
import { IUser } from '../../redux/Auth/type';
import { logoutSuccess } from '../../redux/Auth/action';
import { myActionCart } from '../../redux/Cart/action';
import { toggleTheme } from '../../redux/Theme/action';
import { ReactComponent as Sunny } from '../../assets/sunny.svg';
import { ReactComponent as NightLight } from '../../assets/nightlight.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logoutIcon.svg';
import { ReactComponent as AdminIcon } from '../../assets/icons/adminIcon.svg';
import { ReactComponent as Person } from '../../assets/icons/person.svg';
import { ReactComponent as Users } from '../../assets/people.svg';
import { ReactComponent as Orders } from '../../assets/list.svg';

const Style = {
  color: '#FFF',
  fill: '#FFF',
  marginRight: '5px',
  marginBottom: '2px',
  lineHieght: '1px',
};

export const Navbar = ({ open }) => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  const user: IUser = useToken();
  const dispatch = useDispatch();
  // const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const { cart, theme } = useSelector((state: AppState) => state);

  const toggleTheme_ = useCallback(() => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
  }, [theme, dispatch]);

  useEffect(() => {
    dispatch(myActionCart());
  }, [dispatch]);

  const Logout = () => {
    dispatch(logoutSuccess());
    navigate('/login');
  };
  return (
    <ListNav>
      <Logo />
      <NavBox>
        <SearchInput
          value={value}
          type="text"
          style={{ fontFamily: 'mulish', flexGrow: '55' }}
          placeholder="search..."
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <SearchButton
          style={{
            fontFamily: 'mulish',
            fontWeight: 'bold',
            minWidth: '125px',
          }}
          onClick={() => {
            navigate(`/search${value ? `?keyword=${value}` : ''}`);
          }}
        >
          <StyledSearchIcon />
          Search
        </SearchButton>
      </NavBox>
      <NavIcon style={{ justifyContent: 'flex-end' }}>
        <IConsContainer>
          {user.isAdmin && (
            <>
              <Link
                to="/dashboard"
                style={{ textDecoration: 'none', fontFamily: 'mulish' }}
              >
                <IconList>
                  <AdminIcon />
                  Admin
                </IconList>
              </Link>
              <Link
                to="/users"
                style={{ textDecoration: 'none', fontFamily: 'mulish' }}
              >
                <IconList>
                  <Users />
                  users
                </IconList>
              </Link>{' '}
              <Link
                to="/orders"
                style={{ textDecoration: 'none', fontFamily: 'mulish' }}
              >
                <IconList>
                  <Orders />
                  orders
                </IconList>
              </Link>
            </>
          )}
          {user?._id ? (
            <Link
              to="/profile"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList>
                <Person style={Style} />
                {`${user.firstName} ${user.lastName}`}
              </IconList>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList>
                <PersonIcon width="20px" height="20px" style={Style} />
                Login/Signup
              </IconList>
            </Link>
          )}
          {user.isAdmin && (
            <Link
              to="/cart"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList style={{ position: 'relative' }}>
                {cart.success && <Badge>{cart?.cart?.items.length}</Badge>}
                <CartIcon />
                Cart
              </IconList>
            </Link>
          )}
          {user?._id && (
            <IconList onClick={Logout}>
              <LogoutIcon />
              Logout
            </IconList>
          )}
          <NavIcon onClick={toggleTheme_} aria-label="toggle-theme">
            {theme === 'light' ? <Sunny /> : <NightLight />}
          </NavIcon>
        </IConsContainer>
      </NavIcon>
    </ListNav>
  );
};
