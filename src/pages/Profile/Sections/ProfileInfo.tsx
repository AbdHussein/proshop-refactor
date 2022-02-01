/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ChangeEvent, useCallback } from 'react';
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
import { formatDate } from '../../../utils/helper/formatDay';
import { changeAvatar, InterfaceUpdateUser } from '../../../redux/User/action';

interface IProfileDashboard {
  user?: IUser;
}

const ProfileInfo = ({ user }: IProfileDashboard) => {
  const dispatch = useDispatch();

  const uploadPhoto = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        changeAvatar({
          ...(user as IUser),
          profileImage: e.target.files?.[0] as File,
        } as InterfaceUpdateUser),
      );
    },
    [user],
  );

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
          >
            <DataValue>{user?.firstName}</DataValue>
            <DataValue>{user?.lastName}</DataValue>
            <DataValue>{user?.email}</DataValue>
            <DataValue>
              {user?.dateOfBirth && formatDate(user?.dateOfBirth as string)}
            </DataValue>
          </Container>
        </InfoDetailsContainer>
        <ActionsWrapper>
          <Button
            fontSize="13px"
            style={{ marginBottom: '2em', marginTop: '2em' }}
            padding="1em"
          >
            Change Password
          </Button>
          <Button
            fontSize="13px"
            style={{ marginBottom: '2em', marginTop: '2em' }}
            padding="1em"
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
    </InfoContainer>
  );
};

export default ProfileInfo;
