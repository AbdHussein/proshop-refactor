import React from 'react';
import { useTheme } from 'styled-components';
import { Container, Typography } from '../../../components';
import {
  DataValue,
  InfoDetailsContainer,
  SpanTitle,
} from '../../Profile/style';
import { ButtonKeep } from './style';

interface IDetailProps {
  orderNumber?: string;
  shippingAddress?: string;
  orderItem?: string;
}

const Detail = ({ orderNumber, shippingAddress, orderItem }: IDetailProps) => {
  const theme = useTheme();
  return (
    <>
      <Container
        direction="row"
        height="372px"
        border-radius="16px"
        width="85.4%"
        margin="44px auto"
        background={`${theme.background?.paper}`}
      >
        <Container
          direction="column"
          margin-top="20px"
          justify-content="space-between"
          padding="40px"
        >
          <Typography
            variant="h1"
            bold
            margin-bottom="30px"
            fontFamily="mulish"
          >
            Payment Success !
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
              <SpanTitle>Order number</SpanTitle>
              <SpanTitle>Shipping Address</SpanTitle>
              <SpanTitle>Order Items</SpanTitle>
            </Container>
            <Container
              direction="column"
              align-items="flex-start"
              justify-content="space-between"
              min-height="150px"
              max-width="60%"
              height="fit-content !important"
            >
              <DataValue>65AS1D56ASD156DS</DataValue>
              <DataValue>
                56051 Jones Falls, Philippines, Turkey - 62502
              </DataValue>
              <DataValue>
                1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless
                Bluetooth Headset
              </DataValue>
            </Container>
          </InfoDetailsContainer>
          <Typography
            variant="p"
            width="50%"
            margin-bottom="31px"
            fontFamily="mulish"
          >
            An email will be sent to your email address contains order
            confirmation and tracking code
          </Typography>
        </Container>
        <Container
          direction="column"
          justify-content="space-between"
          height="115px"
          margin-top="65px"
        />
      </Container>
      <Container padding="0" width="14%" float="right" margin-right="7.5%">
        <ButtonKeep to="/">
          <Typography font-size="20px" fontFamily="mulish">
            Keep Shopping
          </Typography>
        </ButtonKeep>
      </Container>
    </>
  );
};

export default Detail;
