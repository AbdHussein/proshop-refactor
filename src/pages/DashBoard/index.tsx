import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Link } from 'react-router-dom';
import { Container, SpinnerContainer, Typography } from '../../components';
import Table from './Table';
import { Btn, DashContainer } from './style';
import { AppState } from '../../redux/store';
import { TAllActionProduct } from '../../redux/Product/type';
import { getProducts } from '../../redux/Product/action';

const DashBoard = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();

  const allProduct = useSelector(
    (state: AppState) => state.product.allProducts,
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Container
        direction="row"
        justify-content="space-between"
        width="89%"
        margin="80px auto 0 auto"
      >
        <Typography variant="h2">
          Products
        </Typography>
        <Btn>
          <Link to="/addproduct" style={{ textDecoration: 'none' }}>
            <Typography font-size="20px">New Product</Typography>
          </Link>
        </Btn>
      </Container>
      <DashContainer direction="column">
        {allProduct.isLoading ? (
          <SpinnerContainer />
        ) : (
          <Table data={allProduct.allProduct?.products} />
        )}
      </DashContainer>
    </>
  );
};

export default DashBoard;
