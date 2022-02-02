/* eslint-disable import/extensions */
import { ICellRendererParams } from 'ag-grid-community';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IColumn } from '../../@types/table';
import Table from '../../components/Table';
import { getOrders } from '../../redux/Order/action';
import { IOrders } from '../../redux/Order/type';
import { AppState } from '../../redux/store';
import { Actions, DeliveredIcons, PaidIcons } from './CellRenderers';
import { Container, Title } from './Orders.styled';

const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state: AppState) => state.order.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const columns: IColumn[] = [
    {
      name: 'Order ID',
      cellRenderer: (params: ICellRendererParams) => {
        return `${params.data._id}`;
      },
    },
    {
      name: 'orderItems',
      cellRenderer: params => `${params.value?.length} Items`,
    },
    {
      name: 'paymentMethod',
    },
    {
      name: 'totalPrice',
      cellRenderer: params => `$${params.value?.toFixed(2)}`,
    },
    {
      name: 'isPaid',
      cellRenderer: 'PaidIconsRenderer',
    },
    {
      name: 'isDelivered',
      cellRenderer: 'DeliveredIconsRenderer',
    },
    { name: 'Actions', cellRenderer: 'ActionsRenderer' },
  ];

  return (
    <Container>
      <Title>All Orders</Title>
      <Table
        columns={columns}
        data={orders?.orders as IOrders[]}
        frameworkComponents={{
          ActionsRenderer: Actions,
          DeliveredIconsRenderer: DeliveredIcons,
          PaidIconsRenderer: PaidIcons,
        }}
      />
    </Container>
  );
};

export default Orders;
