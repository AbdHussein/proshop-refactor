import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { Container, Divider, Image, Typography } from '../../../components';
import { AuthActions } from '../../../redux/Auth/action';
import { IUser, TAllActionAuth } from '../../../redux/Auth/type';
import { AppState } from '../../../redux/store';
import {
  DashboardContainer,
  DashImgContainer,
  NavLink,
  OutLink,
} from '../style';

interface IProfileDashboard {
  user?: IUser;
  isActive: any;
}

const ProfileDashboard = ({ user, isActive }: IProfileDashboard) => {
  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();
  const handleLoagout = () => {
    dispatch(
      AuthActions.logoutSuccess(() => {
        navigation('/login');
      }),
    );
  };
  return (
    <DashboardContainer
      direction="column"
      align-items="flex-start"
      width="30%"
      height="528px"
      background="#F2F2F2"
      border-radius="16px"
    >
      <DashImgContainer padding="1em">
        <Image
          src={user?.profileImage}
          width="137px"
          height="137px"
          variant="circle"
          border
          style={{ margin: '0' }}
        />
        <Typography variant="h2" fontSize="2rem" margin="0.5em 0 0 0.5em">
          {`${user?.firstName}  ${user?.lastName}`}
        </Typography>
      </DashImgContainer>
      <Container
        direction="column"
        align-items="flex-start"
        justify-content="space-between"
        margin-bottom="1em"
        min-height="150px"
        padding="1em"
      >
        <NavLink to="#" onClick={isActive}>
          My Orders
        </NavLink>
      </Container>
      <Divider color="#707070" />
      <OutLink to="#" onClick={handleLoagout}>
        Logout
      </OutLink>
    </DashboardContainer>
  );
};

export default ProfileDashboard;
