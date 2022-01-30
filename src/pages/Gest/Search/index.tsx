import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Container, SpinnerContainer, Typography } from '../../../components';
import ComplexCard from '../../../components/Card/productCard';
import { DeviderTitle } from '../../../components/DeviderTitle/deviderTitle';
import { getProducts } from '../../../redux/Product/action';
import { TAllActionProduct } from '../../../redux/Product/type';
import { AppState } from '../../../redux/store';
import { CardsBox } from './style';

const SerachPage = () => {
  const { search } = useLocation();
  const keyword = (
    new URLSearchParams(search).get('keyword')
      ? new URLSearchParams(search).get('keyword')
      : ''
  ) as string;
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const allProducts = useSelector(
    (state: AppState) => state.product.allProducts,
  );
  useEffect(() => {
    dispatch(getProducts(keyword));
  }, [keyword, dispatch]);

  return allProducts.isLoading ? (
    <SpinnerContainer />
  ) : (
    <Container
      background="F7F8FC"
      direction="column"
      align-items="center"
      width="100%"
    >
      <Container
        direction="row"
        width="85.4%"
        marginBottom="30px"
        alignItems="flex-start"
      >
        <DeviderTitle title="Featured Product" position="center" />
      </Container>
      <CardsBox>
        {allProducts?.allProduct?.products?.map(x => (
          <ComplexCard {...x} image={x.images[0] || ''} />
        ))}
      </CardsBox>
    </Container>
  );
};

export default SerachPage;
