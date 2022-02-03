// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  FooterTitleRight,
  TextFooter,
  UserName,
  Address,
  RevieworderButton,
  ChangeText,
  HeaderTitleRight,
  ShapeAddress,
  RightSectionPlace,
  OrderDetailsText,
  LeftOrderSection,
  OrderWrapper,
  ProductContainer,
} from './style';
import { OrderDetails } from './orderDtails';
import { Column, Row, SpinnerContainer } from '../../../../components';

import { AppState } from '../../../../redux/store';
import { getOrderById } from '../../../../redux/Order/action';

import { myActionCart } from '../../../../redux/Cart/action';

export const ReviewTow = ({
  paymentId,
  clientSec,
  orderId,
}: {
  paymentId: string;
  clientSec: string;
  orderId: string;
}) => {
  const navigation = useNavigate();
  const stripe: any = useStripe();
  const [loading, setLoading] = useState<boolean>(false);
  const pay = async () => {
    setLoading(true);
    try {
      const { error } = await stripe.confirmCardPayment(clientSec, {
        payment_method: paymentId,
      });
      setLoading(false);
      if (error) throw new Error(error.message);
      toast('Payment Successful', {
        type: 'success',
      });

      navigation(`/payment-success`);
    } catch (error: any) {
      toast(error.message, { type: 'error' });
    }
  };

  const dispatch = useDispatch();
  const getOrder = useSelector((state: AppState) => state.order.orderById);
  useEffect(() => {
    dispatch(myActionCart());
    dispatch(getOrderById(orderId));
  }, [dispatch]);

  return (
    <OrderWrapper>
      {getOrder?.isLoading && !getOrder.orders ? (
        <SpinnerContainer />
      ) : (
        <>
          <LeftOrderSection>
            <Column>
              <ShapeAddress>Shipping Address</ShapeAddress>
              <UserName>{getOrder.orders?.user?.firstName}</UserName>
              <Address>
                {getOrder?.orders?.shippingAddress?.address},
                {getOrder?.orders?.shippingAddress?.city},
                {getOrder?.orders?.shippingAddress?.country},
              </Address>
              <HeaderTitleRight style={{ marginTop: '32px' }}>
                <ShapeAddress style={{ marginTop: '5px' }}>
                  Order Details
                </ShapeAddress>
                <ChangeText to="/cart">change</ChangeText>
              </HeaderTitleRight>
              <Column style={{ width: '100%' }}>
                <ProductContainer>
                  {getOrder.isLoading ? (
                    <SpinnerContainer />
                  ) : (
                    <>
                      {getOrder.orders?.orderItems?.map(x => (
                        <OrderDetails
                          title={x.product?.name}
                          image={x.product?.images[0]}
                          priceItem={x.product.price}
                          countItem={x.qty}
                          isHr
                        />
                      ))}
                    </>
                  )}
                </ProductContainer>
              </Column>
            </Column>
          </LeftOrderSection>
          <RightSectionPlace>
            <Column>
              <OrderDetailsText>Order Details</OrderDetailsText>
              <FooterTitleRight>
                <TextFooter>Subtotal</TextFooter>
                <TextFooter>
                  {getOrder.orders?.orderItems
                    ?.reduce(
                      (acc, item) => acc + item?.product?.price * item?.qty,
                      0,
                    )
                    .toFixed(2)}
                  $
                </TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Tax</TextFooter>
                <TextFooter>{getOrder.orders?.taxPrice}$</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Shipping</TextFooter>
                <TextFooter>{getOrder.orders?.shippingPrice} $</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter style={{ fontWeight: 'bold' }}>Total</TextFooter>
                <TextFooter style={{ fontWeight: 'bold' }}>
                  {getOrder?.orders?.totalPrice}
                </TextFooter>
              </FooterTitleRight>
            </Column>
            <Row style={{ margin: '30px 0 10px' }} JC="center">
              <RevieworderButton onClick={pay}>
                {loading ? 'loading...' : 'Review order'}
              </RevieworderButton>
            </Row>
          </RightSectionPlace>
        </>
      )}
    </OrderWrapper>
  );
};

export default ReviewTow;
