import styled from 'styled-components';
import {
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';

export const StripeCardInput = styled(CardNumberElement)`
  border: 1px solid #131313;
  padding: 10px;
  width: 22rem;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  color: #333;
  margin-bottom: 1rem;
`;

export const StripeCardExpiry = styled(CardExpiryElement)`
  border: 1px solid #e6e6e6;
  padding: 10px;
  width: 20rem;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  color: #333;
  margin-bottom: 1rem;
`;

export const StripeCardCvc = styled(CardCvcElement)`
  border: 1px solid #e6e6e6;
  padding: 10px;
  width: 20rem;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  color: #333;
  margin-bottom: 1rem;
`;

export const StripeCardElement = styled(CardElement)`
  border: 1px solid #e6e6e6;
  padding: 10px;
  width: 20rem;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  color: #333;
  margin-bottom: 1rem;
`;
