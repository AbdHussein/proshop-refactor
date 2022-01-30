/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Container } from '../..';
import { DeviderTitle } from '../../DeviderTitle/deviderTitle';
import { RowWithRadius } from './style';
import { IProducts, TAllActionProduct } from '../../../redux/Product/type';
import ComplexCard from '../../Card/productCard';
import { getTopProducts } from '../../../redux/Product/action';
import { ActionCartType } from '../../../redux/Cart/type';
import { AppState } from '../../../redux/store';
import { SpinnerContainer } from '../../SpinnerContainer';

interface Props {
  title?: string;
}

export const TopRate = ({ title = 'TOP RATE PRODUCTS' }: Props) => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const topProducts = useSelector(
    (state: AppState) => state.product.topProducts,
  );

  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);
  return (
    <Container direction="column" margin="auto" width="90%">
      <Container>
        <DeviderTitle position="start" title={title} />
      </Container>
      {topProducts.isLoading ? (
        <SpinnerContainer />
      ) : (
        <RowWithRadius direction="row">
          {topProducts.product?.map((item, i) => (
            <ComplexCard image={item.images[0]} {...item} />
          ))}
        </RowWithRadius>
      )}
    </Container>
  );
};
