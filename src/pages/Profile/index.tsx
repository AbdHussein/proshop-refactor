import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProfileContainer } from './style';
import ProfileInfo from './Sections/ProfileInfo';
import ProfileDashboard from './Sections/ProfileDashboard';
import { getProfile } from '../../redux/User/action';
import { AppState } from '../../redux/store';
import { TAllActionUser } from '../../redux/User/type';
import { SpinnerContainer } from '../../components';
import OrdersProduct from './Orders';

const Profile = () => {
  const [active, setActive] = useState(false);
  const isActive = () => setActive(true);

  const dispatch = useDispatch();

  const useProfile = useSelector((state: AppState) => state.user.myProfile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return useProfile.isLoading ? (
    <SpinnerContainer />
  ) : (
    <ProfileContainer
      align-items="flex-start"
      width="71%"
      margin-left="7.3%"
      margin-top="129px"
    >
      <ProfileDashboard user={useProfile.user} isActive={isActive} />
      <ProfileInfo user={useProfile.user} />
    </ProfileContainer>
  );
};

export default Profile;
