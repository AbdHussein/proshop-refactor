import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { json } from 'stream/consumers';
import logo from '../../../assets/Images/card.png';
import { Column, Row, SpinnerContainer, Typography } from '../../../components';
import {
  IShippingSchema,
  ShippingSchema,
} from '../../../utils/helper/validation';

import {
  FooterTitleRight,
  TextFooter,
  InnerSection,
  WrapperRowInput,
  RevieworderButton,
  ChangeText,
  HeaderTitleRight,
  WrapperCard,
  ShapeAddress,
  DividerTop,
  WrapperReviewRow,
  LeftSection,
  RightSection,
  BoxNumber,
  TextActive,
  OrfferSection,
  InnerOverFlow,
} from './Sections/style';
import { OrderDetails } from './Sections/orderDtails';
import { InputController } from '../../../components/Form';
import { ReviewTow } from './Sections/reviewtow';
import { AppState } from '../../../redux/store';
import { ActionOrderType } from '../../../redux/Order/type';
import { createOrder } from '../../../redux/Order/action';
import { getProfile } from '../../../redux/User/action';
import { ActionCartType } from '../../../redux/Cart/type';
import { myActionCart } from '../../../redux/Cart/action';

const initialValues: IShippingSchema = {
  country: '',
  city: '',
  zip: '',
  address: '',
};

const ReviewOrder = () => {
  const [stepperNumber, setstepperNumber] = useState(0);
  const [checkoutError, setCheckoutError] = useState();
  const [paymentId, setPaymentId] = useState(null);
  const stripe: any = useStripe();
  const elements = useElements();

  const dispatch = useDispatch<ThunkDispatch<AppState, any, any>>();
  const cart = useSelector((state: AppState) => state.cart);
  const myOrder = useSelector((state: AppState) => state.order.createOrder);
  useEffect(() => {
    dispatch(myActionCart());
  }, [dispatch]);

  const formik = useFormik<IShippingSchema>({
    initialValues,
    validationSchema: ShippingSchema,
    onSubmit: async values => {
      const billingDetails = {
        address: values.address,
        city: values.city,
        country: values.country,
        postalCode: values.zip,
      };
      try {
        dispatch(createOrder(billingDetails));
        console.log('myOrder', myOrder);
        const paymentElement = elements?.getElement(CardElement);
        const paymentMethodReq = await stripe.createPaymentMethod({
          type: 'card',
          card: paymentElement,
          // billing_details: billingDetails,
        });
        if (paymentMethodReq?.error) throw paymentMethodReq.error;
        setPaymentId(paymentMethodReq?.paymentMethod?.id);
        setstepperNumber(1);
      } catch (error: any) {
        toast(JSON.stringify(error.message), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });

  const handleCardDetailsChange = (ev: any) => {
    if (ev.error) setCheckoutError(ev.error.message);
    else setCheckoutError(undefined);
  };

  return (
    <OrfferSection>
      <InnerSection>
        <Typography variant="h2" font-Family="Mulish">
          Review Order
        </Typography>
        <WrapperReviewRow>
          <BoxNumber isActive={stepperNumber === 0}>1</BoxNumber>
          <TextActive isActive={stepperNumber === 0}>
            Shipping and Payment
          </TextActive>
          <DividerTop />
          <BoxNumber isActive={stepperNumber === 1}>2</BoxNumber>
          <TextActive isActive={stepperNumber === 1}>Place an Order</TextActive>
        </WrapperReviewRow>
        {stepperNumber === 0 && (
          <Column>
            <WrapperCard>
              <LeftSection>
                <form onSubmit={formik.handleSubmit}>
                  <Column
                    style={{
                      width: '90%',
                      margin: 'auto',
                      justifyContent: 'space-between',
                    }}
                  >
                    <ShapeAddress>Shipping Address</ShapeAddress>

                    <WrapperRowInput>
                      <InputController
                        name="country"
                        label="Country"
                        type="text"
                        placeholder="Palestine"
                        isRequired
                        errors={formik.errors?.country}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        style={{ fontFamily: 'mulish' }}
                      />
                      <InputController
                        name="city"
                        label="City"
                        type="text"
                        placeholder="Gaza"
                        isRequired
                        errors={formik.errors?.city}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        marginLeft="10%"
                        style={{ fontFamily: 'mulish' }}
                      />
                    </WrapperRowInput>
                    <WrapperRowInput>
                      <InputController
                        name="zip"
                        label="Zip Code"
                        type="text"
                        placeholder="65555"
                        isRequired
                        errors={formik.errors?.zip}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.zip}
                        style={{ fontFamily: 'mulish' }}
                      />
                      {/*
                        47%
                        */}
                      <InputController
                        name="address"
                        label="Street Address"
                        type="text"
                        placeholder="65555"
                        isRequired
                        errors={formik.errors?.address}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        marginLeft="10%"
                        style={{ fontFamily: 'mulish' }}
                      />
                    </WrapperRowInput>
                    {/* {/* <ShapeAddress>Payment Details</ShapeAddress> */}

                    <CardElement
                      options={cardElementOpts as any}
                      onChange={handleCardDetailsChange}
                    />
                    {checkoutError && (
                      <Typography margin-Top="1rem" color="red">
                        {checkoutError}
                      </Typography>
                    )}
                    <Row JC="flex-end">
                      <RevieworderButton
                        style={{ fontFamily: 'mulish' }}
                        type="submit"
                      >
                        Review order
                      </RevieworderButton>
                    </Row>
                  </Column>
                </form>
              </LeftSection>

              <RightSection>
                <HeaderTitleRight>
                  <ShapeAddress style={{ fontFamily: 'mulish' }}>
                    Order Details
                  </ShapeAddress>
                  <ChangeText style={{ fontFamily: 'mulish' }} to="/cahnge">
                    change
                  </ChangeText>
                </HeaderTitleRight>
                <Column>
                  <InnerOverFlow>
                    {cart.isLoading ? (
                      <SpinnerContainer />
                    ) : (
                      <>
                        {cart?.cart?.items?.map(x => (
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
                  </InnerOverFlow>
                </Column>

                <FooterTitleRight>
                  <TextFooter>Subtotal</TextFooter>
                  <TextFooter>
                    {cart?.cart?.items
                      .reduce(
                        (acc, item) => acc + item?.product?.price * item?.qty,
                        0,
                      )
                      .toFixed(2)}{' '}
                    $
                  </TextFooter>
                </FooterTitleRight>
                <FooterTitleRight>
                  <TextFooter>Tax</TextFooter>
                  <TextFooter>0 $</TextFooter>
                </FooterTitleRight>
                <FooterTitleRight>
                  <TextFooter>Shipping</TextFooter>
                  <TextFooter>0 $</TextFooter>
                </FooterTitleRight>
                <FooterTitleRight>
                  <TextFooter style={{ fontWeight: 'bold' }}>Total</TextFooter>
                  <TextFooter style={{ fontWeight: 'bold' }}>
                    {cart?.cart?.items
                      .reduce(
                        (acc, item) => acc + item?.product?.price * item?.qty,
                        0,
                      )
                      .toFixed(2)}{' '}
                    $
                  </TextFooter>
                </FooterTitleRight>
              </RightSection>
            </WrapperCard>
          </Column>
        )}
        {stepperNumber === 1 && (
          <ReviewTow
            paymentId={paymentId}
            clientSec={myOrder?.orders?.clientSecret}
            orderId={myOrder?.orders?._id}
          />
        )}
      </InnerSection>
    </OrfferSection>
  );
};

export default ReviewOrder;

const iframeStyles = {
  base: {
    iconColor: '#0F1112',
    color: '#0F1112',
    fontWeight: '500',
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',
    border: '1px solid #4D4D4D',
    ':-webkit-autofill': {
      color: '#fce883',
    },
    '::placeholder': {
      color: '#4D4D4D',
    },
    '::-webkit-input-placeholder': {
      color: '#4D4D4D',
      border: '1px solid #4D4D4D',
    },
  },
};

const cardElementOpts = {
  iconStyle: 'solid',
  style: iframeStyles,
  hidePostalCode: true,
};
