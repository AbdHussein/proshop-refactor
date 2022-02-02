/* eslint-disable react/destructuring-assignment */
import { ICellRendererParams } from 'ag-grid-community';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Check } from '../../../assets/check.svg';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { ReactComponent as Eye } from '../../../assets/eye.svg';
import { SpinnerContainer, Typography } from '../../../components';
import Dailog from '../../../components/Dialog';
import {
  deliverOrder,
  getOrderById,
  getOrders,
} from '../../../redux/Order/action';
import { IOrders } from '../../../redux/Order/type';
import { AppState } from '../../../redux/store';
import { notify } from '../../../utils/helper/notification';
import { OrderDetails } from '../../User/ReviewOrder/Sections/orderDtails';
import { ProductContainer } from '../../User/ReviewOrder/Sections/style';

const VisibilityIcon = styled(Eye)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.text?.primary};
`;

const DeliverButton = styled.button`
  color: ${({ theme }) => theme.text?.primary};
  border: 1px solid ${({ theme }) => theme.text?.primary};
  border-radius: 5px;
  padding: 0.5em 2em;
  background: transparent;
  margin: auto;
  margin-top: 2em;
  cursor: pointer;
`;

export const Actions = (params: ICellRendererParams) => {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    orderById: { isLoading, orders },
  } = useSelector((state: AppState) => state.order);
  const dispatch = useDispatch();

  const markAsDelivered = useCallback(() => {
    if (orders?.isPaid && !orders?.isDelivered) {
      dispatch(deliverOrder(params.data?._id as string));
      notify('success', 'Order delivered successfully');
      handleClose();
      dispatch(getOrders());
      return;
    }
    if (orders?.isDelivered) {
      notify('error', 'Order is delivered already');
      return;
    }
    notify('error', 'Can not deliver not paid order');
  }, [params, dispatch]);

  useEffect(() => {
    if (visible) {
      dispatch(getOrderById(params.data?._id as string));
    }
  }, [visible]);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <VisibilityIcon onClick={() => setVisible(true)} />
      </div>
      <Dailog open={visible} title="Order Details" onClose={handleClose}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {isLoading ? (
            <SpinnerContainer />
          ) : (
            <ProductContainer style={{ width: '100%', height: '300px' }}>
              {orders?.orderItems?.map(x => (
                <OrderDetails
                  title={x.product?.name}
                  image={x.product?.images[0]}
                  priceItem={x.product.price}
                  countItem={x.qty}
                  isHr
                />
              ))}
            </ProductContainer>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h4" style={{ marginTop: '1em' }}>
              Total Price: ${orders?.totalPrice?.toFixed(2)}
            </Typography>
            <Typography
              variant="h4"
              style={{
                marginTop: '1em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              Delivery Status:
              {orders?.isDelivered ? (
                <Typography variant="h4" style={{ color: 'green' }}>
                  Delivered
                </Typography>
              ) : (
                <Typography variant="h4" style={{ color: 'red' }}>
                  Pending
                </Typography>
              )}
            </Typography>
          </div>
          {!orders?.isDelivered && (
            <DeliverButton onClick={markAsDelivered}>
              Mark As Delivered
            </DeliverButton>
          )}
        </div>
      </Dailog>
    </>
  );
};

export const DeliveredIcons = (params: ICellRendererParams) => {
  if (params.data?.isDelivered) {
    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Check
          fill="green"
          style={{
            cursor: 'pointer',
            height: '1.3em',
          }}
        />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Close
        fill="red"
        style={{
          cursor: 'pointer',
          height: '1.3em',
        }}
      />
    </div>
  );
};

export const PaidIcons = (params: ICellRendererParams) => {
  if (params.data?.isPaid) {
    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Check
          fill="green"
          style={{
            cursor: 'pointer',
            height: '1.3em',
          }}
        />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Close
        fill="red"
        style={{
          cursor: 'pointer',
          height: '1.3em',
        }}
      />
    </div>
  );
};
