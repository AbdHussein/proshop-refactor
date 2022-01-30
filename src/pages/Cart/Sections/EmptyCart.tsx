import React from 'react';
import { Container, Image, Typography } from '../../../components';
import url from '../../../assets/Images/card.png';

const EmptyCart = () => {
  return (
    <>
      <Container flex-direction="column">
        <Typography
          variant="h3"
          fontSize="2em"
          color="#242424"
          bold
          text-align="center"
          letter-spacing="0.64px"
          margin-bottom="1em"
        >
          Your shopping cart is empty
        </Typography>
        <Image src={url} size="lg" />
      </Container>
    </>
  );
};

export default EmptyCart;
