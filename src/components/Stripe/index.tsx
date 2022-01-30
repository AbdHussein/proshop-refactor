import React, { useState } from 'react';
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardElement,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Container } from '../Container';
import Typography from '../Typography';
import Button from '../Button';
import { StripeCardCvc, StripeCardExpiry, StripeCardInput } from './Style';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

interface IStripeIndex {
  children?: React.ReactNode;
  clientSecret: string;
}

const Stripe: React.FC<IStripeIndex> = ({ children, clientSecret }) => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  };
  const [checkoutError, setCheckoutError] = useState();

  const stripe: any = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = (ev: any) => {
    if (ev.error) setCheckoutError(ev.error.message);
    else setCheckoutError(undefined);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { error, paymentMethod } = stripe.confirmCardPayment('113123213', {
      payment_method: {
        card: CardNumberElement,
        billing_details: {
          name: 'ahmad',
          address: {
            city: 'city',
            country: 'country',
            line1: 'line1',
            line2: 'line2',
            postal_code: 'postal_code',
            state: 'state',
          },
        },
      },
    });
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {/* <Container direction="column" width="80%" margin="0 auto" padding="2rem"> */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
        }}
      >
        {/* <CardElement
          options={cardElementOpts as any}
          onChange={handleCardDetailsChange}
        /> */}
        <StripeCardInput onChange={handleCardDetailsChange} />
        <StripeCardExpiry />
        <StripeCardCvc />

        <Button
          type="submit"
          width="10em"
          style={{
            marginTop: '1rem',
          }}
        >
          Pay
        </Button>
      </form>
      {checkoutError && (
        <Typography margin-Top="1rem" color="red">
          {checkoutError}
        </Typography>
      )}
      {/* </Container> */}
    </Elements>
  );
};

export default Stripe;

const iframeStyles = {
  base: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '18px',
    color: '#333',
  },
};

const cardElementOpts = {
  iconStyle: 'solid',
  style: iframeStyles,
};
