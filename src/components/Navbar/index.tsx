import { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import {
  BsFillBookmarkDashFill,
  BsFillCartFill,
  BsToggleOff,
  BsToggleOn,
} from 'react-icons/bs';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { FiSettings } from 'react-icons/fi';
import { ListNavItem } from './ListNavItem';
import {
  List,
  StyleObj,
  NavBox,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
  ListNav,
  IconList,
  NavIcon,
  Hamburger,
  Badge,
  IConsContainer,
} from './NavBarStyles';
import Logo from './Logo/Logo';
import { useToken } from '../../utils/helper/useToken';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { IUser } from '../../redux/Auth/type';
import { logoutSuccess } from '../../redux/Auth/action';
import useTheme from '../../Hoc/UseTheme';
import { myActionCart } from '../../redux/Cart/action';

const Style = {
  color: '#FFF',
  fill: '#FFF',
  marginRight: '5px',
  marginBottom: '2px',
  lineHieght: '1px',
};

export const Navbar = ({ open, setToggle }) => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  const user: IUser = useToken();
  const { theme } = useTheme();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const cart = useSelector((state: AppState) => state.cart);

  useEffect(() => {
    dispatch(myActionCart());
  }, [dispatch]);

  const Logout = () => {
    dispatch(logoutSuccess());
    navigate('/login');
  };
  return (
    <ListNav open={false}>
      <Logo />
      <NavBox style={{ margin: 'auto' }}>
        <SearchInput
          value={value}
          type="text"
          style={{ fontFamily: 'mulish' }}
          placeholder="Iphone"
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <SearchButton
          style={{ fontFamily: 'mulish' }}
          onClick={() => {
            navigate(`/search${value ? `?keyword=${value}` : ''}`);
          }}
        >
          <StyledSearchIcon />
          Search
        </SearchButton>
      </NavBox>
      <NavIcon style={{ width: '15%' }}>
        <IConsContainer>
          {user.isAdmin ? (
            <Link
              to="/dashboard"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList>
                <FiSettings size="1.2em" style={Style} />
                Admin
              </IconList>
            </Link>
          ) : null}
          {user?._id ? (
            <Link
              to="/profile"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList>
                <FaUserAlt size="1.5em" style={Style} />
                {`${user.firstName} ${user.lastName}`}
              </IconList>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList>
                <FaUserAlt size="1.2em" style={Style} />
                Login/Signup
              </IconList>
            </Link>
          )}
          <Link
            to="/cart"
            style={{ textDecoration: 'none', fontFamily: 'mulish' }}
          >
            <IconList style={{ position: 'relative' }}>
              {!cart.isLoading && cart.success ? (
                <Badge>{cart?.cart?.items.length}</Badge>
              ) : (
                <Badge>0</Badge>
              )}
              <BsFillCartFill size="5em" style={Style} />
              Cart
            </IconList>
          </Link>
          {user?._id && (
            <IconList onClick={Logout}>
              <BiLogOut size="2em" style={Style} />
              Logout
            </IconList>
          )}
        </IConsContainer>
      </NavIcon>
    </ListNav>
  );
};
