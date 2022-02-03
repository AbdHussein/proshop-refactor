/* eslint-disable import/extensions */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IColumn } from '../../@types/table';
import { SpinnerContainer } from '../../components';
import Table from '../../components/Table';
import { IUser } from '../../redux/Auth/type';
import { AppState } from '../../redux/store';
import { getAllUsers } from '../../redux/User/action';
import { Container, Title } from '../Orders/Orders.styled';
import CellRenderers from './CellRenderers';

const columns: IColumn[] = [
  {
    name: 'firstName',
    cellRenderer: params => `${params.data?.firstName}`,
  },
  {
    name: 'lastName',
    cellRenderer: params => `${params.data?.lastName}`,
  },
  {
    name: 'email',
  },
  {
    name: 'isAdmin',
  },
  {
    name: 'dateOfBirth',
    cellRenderer: params => new Date(params.value).toLocaleDateString(),
  },
  {
    name: 'actions',
    cellRenderer: 'ActionsRenderer',
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const {
    allUsers: { isLoading, users },
  } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Container>
      <Title>All Users</Title>
      {isLoading ? (
        <SpinnerContainer />
      ) : (
        <Table
          columns={columns}
          data={users as IUser[]}
          frameworkComponents={{
            ActionsRenderer: CellRenderers,
          }}
        />
      )}
    </Container>
  );
};

export default Users;
