/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Button, Container, Typography, Image } from '../../../components';
import {
  InfoContainer,
  InfoBoxContainer,
  InfoDetailsContainer,
  ImageContainer,
  DataValue,
  SpanTitle,
} from '../style';
import { IUser } from '../../../redux/Auth/type';
import { formatDate } from '../../../utils/helper/formatDay';

interface IProfileDashboard {
  user?: IUser;
}

const ProfileInfo = ({ user }: IProfileDashboard) => {
  return (
    <InfoContainer
      align-items="flex-start"
      width="70%"
      flex-wrap="wrap"
      height="528px"
      background="#F2F2F2"
      border-radius="16px"
      padding="2em"
    >
      <InfoBoxContainer direction="column" width="60%">
        <Typography variant="h2" fontSize="2rem" margin-bottom="2em">
          My Profile
        </Typography>
        <InfoDetailsContainer margin-bottom="2em">
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
            <DataValue>{formatDate(user?.dateOfBirth!)}</DataValue>
          </Container>
        </InfoDetailsContainer>
        <Button
          background="#FCDD06"
          fontSize="13px"
          style={{ marginBottom: '2em' }}
          padding="1em"
        >
          Change Password
        </Button>
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
        <Button
          background="#FCDD06"
          fontSize="13px"
          style={{ margin: '2em auto' }}
          padding="1em"
        >
          Upload new photo
        </Button>
      </ImageContainer>
    </InfoContainer>
  );
};

export default ProfileInfo;
