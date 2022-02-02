/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
// import ProductOverview from './Sections/ProductOverview/ProductOverview';
import Review from './Sections/Review';
import { Container, PathNavigate, SpinnerContainer } from '../../../components';
import {
  getProductById,
  getProducts,
  getTopProducts,
} from '../../../redux/Product/action';
import { AppState } from '../../../redux/store';
import { IProducts } from '../../../redux/Product/type';

import ProductOverview from './Sections/ProductOverview';
import { FeaturedProduct } from '../../../components/sections/FeaturedProducts/FeaturedProducts';

const ProductScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, any>>();
  const { isLoading, product } = useSelector(
    (state: AppState) => state.product.getProductById,
  );

  const topProducts = useSelector(
    (state: AppState) => state.product.topProducts,
  );

  const featcheProduct = useSelector(
    (state: AppState) => state.product.allProducts,
  );

  useEffect(() => {
    getTopProducts();
    getProducts();
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductById(id as string));
  }, []);

  return (
    <Container
      direction="column"
      width="80%"
      margin="80px auto"
      overflow="hidden"
    >
      {isLoading ? (
        <SpinnerContainer />
      ) : (
        <>
          <PathNavigate name={product?.name} />
          <ProductOverview {...(product as IProducts)} />
          <Review reviews={product!.reviews || []} />
          {topProducts.isLoading || !featcheProduct.allProduct ? (
            <SpinnerContainer />
          ) : (
            <FeaturedProduct data={featcheProduct.allProduct.products} />
          )}
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
