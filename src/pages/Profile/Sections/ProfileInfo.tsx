/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Typography, Image } from '../../../components';
import {
  InfoContainer,
  InfoBoxContainer,
  InfoDetailsContainer,
  ImageContainer,
  DataValue,
  SpanTitle,
  UploadButton,
  ActionsWrapper,
} from '../style';
import { IUser } from '../../../redux/Auth/type';
import { formatDate_ } from '../../../utils/helper/formatDay';
import {
  changeAvatar,
  changePassword,
  InterfaceUpdateUser,
  updateUser,
} from '../../../redux/User/action';
import ChangePasswordForm, { IPassword } from './ChangePasswordForm';
import Dailog from '../../../components/Dialog';
import UpdateProfileForm, { IProfile } from './UpdateProfileForm';
import { notify } from '../../../utils/helper/notification';

interface IProfileDashboard {
  user?: IUser;
}

const ProfileInfo = ({ user }: IProfileDashboard) => {
  const dispatch = useDispatch();

  const [isPasswordDialogOpen, setPasswordDialogOpen] =
    useState<boolean>(false);

  const [isProfileDialogOpen, setProfileDialogOpen] = useState<boolean>(false);

  const uploadPhoto = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        changeAvatar({
          ...(user as IUser),
          profileImage: e.target.files?.[0] as File,
        } as InterfaceUpdateUser),
      );
      notify('success', 'Avatar Changed successfully');
    },
    [user],
  );

  const handleSubmitPassword = useCallback((values: IPassword) => {
    dispatch(changePassword({ ...(user as IUser), password: values.password }));
    notify('success', 'Password changed successfully');
    handlePasswordDialogClose();
  }, []);

  const handleSubmitProfile = useCallback((values: IProfile) => {
    // Update Profile
    dispatch(
      updateUser(user?._id as string, {
        ...(user as IUser),
        ...values,
      }),
    );
    notify('success', 'Profile Updated');
    handleProfileDialogClose();
  }, []);

  const handlePasswordDialogClose = useCallback(() => {
    setPasswordDialogOpen(false);
  }, []);

  const handleProfileDialogClose = useCallback(() => {
    setProfileDialogOpen(false);
  }, []);

  return (
    <InfoContainer
      align-items="flex-start"
      width="70%"
      flex-wrap="wrap"
      height="528px"
      border-radius="16px"
      padding="2em"
    >
      <InfoBoxContainer direction="column" width="60%">
        <Typography variant="h2" fontSize="30px !important" margin-bottom="2em">
          My Profile
        </Typography>
        <InfoDetailsContainer margin-top="0.5em">
          <Container
            direction="column"
            align-items="flex-start"
            justify-content="space-between"
            min-height="150px"
            max-width="50%"
            height="fit-content !important"
          >
            <SpanTitle>First Name</SpanTitle>
            <SpanTitle>Last Name</SpanTitle>
            <SpanTitle>Email</SpanTitle>
            <SpanTitle>Birthday</SpanTitle>
          </Container>
          <Container
            direction="column"
            align-items="flex-start"
            justify-content="space-between"
            min-height="150px"
            max-width="60%"
            height="fit-content !important"
          >
            <DataValue>{user?.firstName}</DataValue>
            <DataValue>{user?.lastName}</DataValue>
            <DataValue>{user?.email}</DataValue>
            <DataValue>
              {user?.dateOfBirth && formatDate_(user?.dateOfBirth as string)}
            </DataValue>
          </Container>
        </InfoDetailsContainer>
        <ActionsWrapper>
          <Button
            fontSize="13px"
            style={{ marginBottom: '2em', marginTop: '2em' }}
            padding="1em"
            onClick={() => setPasswordDialogOpen(true)}
          >
            Change Password
          </Button>
          <Button
            fontSize="13px"
            style={{ marginBottom: '2em', marginTop: '2em' }}
            padding="1em"
            onClick={() => setProfileDialogOpen(true)}
          >
            Update Profile
          </Button>
        </ActionsWrapper>
      </InfoBoxContainer>
      <ImageContainer
        direction="column"
        width="40%"
        justify-content="flex-start"
      >
        <Image
          src={user?.profileImage}
          width="12em"
          height="12em"
          variant="circle"
        />
        <label htmlFor="imageUpload">
          <UploadButton>Upload new photo</UploadButton>
          <input
            accept="image/*"
            type="file"
            id="imageUpload"
            name="imageUpload"
            style={{ display: 'none' }}
            onChange={uploadPhoto}
          />
        </label>
      </ImageContainer>
      <Dailog
        open={isPasswordDialogOpen}
        onClose={handlePasswordDialogClose}
        title="Change Password"
      >
        <ChangePasswordForm handleSubmitPassword={handleSubmitPassword} />
      </Dailog>

      <Dailog
        open={isProfileDialogOpen}
        onClose={handleProfileDialogClose}
        title="Update Profile"
      >
        <UpdateProfileForm
          handleSubmitProfile={handleSubmitProfile}
          data={{
            firstName: user?.firstName as string,
            lastName: user?.lastName as string,
            email: user?.email as string,
            dateOfBirth: user?.dateOfBirth as string,
          }}
        />
      </Dailog>
    </InfoContainer>
  );
};

export default ProfileInfo;
