import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartContainer, ListContainer, TotalContainer } from './styles';
import EmptyCart from './Sections/EmptyCart';
import { Container, PathNavigate, SpinnerContainer } from '../../components';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';
import { AppState } from '../../redux/store';
import { TopRate } from '../../components/sections/TopRate/TopRate';
import { myActionCart } from '../../redux/Cart/action';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);

  useEffect(() => {
    dispatch(myActionCart());
  }, []);

  const TopRateComp = useCallback(() => <TopRate />, []);
  return (
    <Container direction="column" padding="20px 7%">
      <PathNavigate name="Shopping Cart" />
      {cart.isLoading ? (
        <SpinnerContainer />
      ) : !cart.cart?.items.length ? (
        <>
          <EmptyCart />
          {TopRateComp()}
        </>
      ) : (
        <CartContainer align-items="flex-start">
          <ListContainer direction="column" width="70%">
            {cart.cart?.items.map(item => (
              <CartList data={item} key={item.product._id} />
            ))}
          </ListContainer>
          <TotalContainer
            direction="column"
            border-radius="16px"
            margin-left="2em"
            height="50%"
          >
            <Subtotal data={cart.cart} />
          </TotalContainer>
        </CartContainer>
      )}
    </Container>
  );
};

export default Cart;
