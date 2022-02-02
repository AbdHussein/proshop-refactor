/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import { ICellRendererParams } from 'ag-grid-community';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IColumn } from '../../@types/table';
import Table from '../../components/Table';
import { getOrders } from '../../redux/Order/action';
import { IOrders } from '../../redux/Order/type';
import { AppState } from '../../redux/store';
import { Container, Title } from './Orders.styled';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Close } from '../../assets/close.svg';

const Actions = (params: ICellRendererParams) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [View, setView] = useState<boolean>(false);
  const dispatch = useDispatch();

  const markAsDelivered = useCallback(() => {
    // dispatch(
    //   deliverOrder(params.data._id, () => {
    //     notify('success', 'Order delivered successfully');
    //     handleClose();
    //     // dispatch(getAllOrders());
    //   }),
    // );
  }, [params, dispatch]);

  const handleClose = () => {
    setVisible(false);
    setView(false);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* <Icon
          sx={{
            cursor: 'pointer',
            height: '1.3em',
          }}
        >
          <VisibilityIcon onClick={() => setView(true)} />
        </Icon> */}
      </div>
      {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="product-delete-dialog"
        open={visible || View}
      >
        <BootstrapDialogTitle id="product-delete-dialog" onClose={handleClose}>
          {visible ? (
            <Typography
              variant="h6"
              color="#FC4059"
              sx={{ marginBottom: '2em', textAlign: 'center' }}
            >
              Are you sure you want to mark this order as delivered ?
            </Typography>
          ) : (
            <Typography color="text.primary" variant="h4">
              Order Details
            </Typography>
          )}
        </BootstrapDialogTitle>
        {visible ? (
          <Row wrap gap="100px">
            <Button onClick={markAsDelivered}>Yes</Button>
            <Button
              border="1px solid #fcdd06"
              background="none"
              onClick={handleClose}
            >
              No
            </Button>
          </Row>
        ) : (
          <OrderDetails onClose={handleClose} params={params} />
        )}
      </BootstrapDialog> */}
    </>
  );
};

const DeliveredIcons = (params: ICellRendererParams) => {
  if (params.data?.isDelivered || params.data?.isPaid) {
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
      cellRenderer: 'IconsRenderer',
    },
    {
      name: 'isDelivered',
      cellRenderer: 'IconsRenderer',
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
          IconsRenderer: DeliveredIcons,
        }}
      />
    </Container>
  );
};

export default Orders;
