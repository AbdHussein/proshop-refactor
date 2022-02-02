import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Typography } from '../../../components';
import ButtonComponent from '../../../components/Button';
import { ICart } from '../../../redux/Auth/type';
import { IItemCart } from '../../../redux/User/type';

interface Props {
  data: ICart;
}

const Subtotal = ({ data }: Props) => {
  const allDiscount = useMemo(() => {
    return Math.round(
      data.totalPrice -
        data.items.reduce(
          (acc, { product }: IItemCart) => product.discount + acc,
          0,
        ),
    ).toFixed(2);
  }, [data.items, data.totalPrice]);

  return (
    <>
      <Container
        gap="15px"
        direction="column"
        align-items="center"
        padding="2em"
      >
        <Typography
          variant="h2"
          fontSize="32px"
          letter-spacing="0.64px"
          margin-bottom="1em"
        >
          Subtotal ({data?.items.length}) items
        </Typography>
        <div>
          <Typography
            color="secondary"
            fontSize="24px"
            letter-spacing="0.48px"
            margin-bottom="0.5em"
            style={{ textDecoration: 'line-through' }}
          >
            {data.totalPrice}$
          </Typography>

          <Typography
            variant="h2"
            fontSize="38px"
            letter-spacing="0.76px"
            margin-bottom="1em"
          >
            {allDiscount}$
          </Typography>
        </div>
      </Container>
      <Divider />
      <Button
        margin="4px auto"
        as={Link}
        padding=".8em"
        width="80%"
        fontSize="18px"
        to="/review"
        style={{ margin: '2em auto', padding: '1.2em' }}
      >
        Proceed to checkout
      </Button>
    </>
  );
};

export default Subtotal;
