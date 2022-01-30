import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerContainer, Typography } from '../../../components';
import { IColumn } from '../../../@types/table';
import Table from './Table';
import { AppState } from '../../../redux/store';
import { getOrders } from '../../../redux/Order/action';
import { InfoContainer } from '../style';

const columns: IColumn[] = [
  {
    name: 'user.firstName',
  },
  {
    name: 'shippingPrice',
  },
  {
    name: 'totalPrice',
  },
  {
    name: 'isPaid',
  },
  {
    name: 'isDelivered',
  },
];

export default function OrdersProduct() {
  const order = useSelector((state: AppState) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  console.log('orders', order);
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
      <Typography variant="h2" fontSize="1.5rem">
        My Orders
      </Typography>
      {order.orders.isLoading ? (
        <SpinnerContainer />
      ) : (
        <Table data={order.orders?.orders?.orders} columns={columns} />
      )}
    </InfoContainer>
  );
}
