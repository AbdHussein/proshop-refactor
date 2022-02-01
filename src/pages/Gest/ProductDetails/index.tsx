/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
// import ProductOverview from './Sections/ProductOverview/ProductOverview';
import Review from './Sections/Review';
import { Container, PathNavigate, SpinnerContainer } from '../../../components';
import { getProductById } from '../../../redux/Product/action';
import { AppState } from '../../../redux/store';
import { IProducts, TAllActionProduct } from '../../../redux/Product/type';
import { TopRate } from '../../../components/sections/TopRate/TopRate';
import { getProfile } from '../../../redux/User/action';
import { TAllActionUser } from '../../../redux/User/type';
import { upduteActionCart } from '../../../redux/Cart/action';
import { Button } from '../../../components/Button/ButtonStyle';
import ProductOverview from './Sections/ProductOverview';

const ProductScreen: React.FC = () => {
  const navigation = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, any>>();
  const { isLoading, product, success } = useSelector(
    (state: AppState) => state.product.getProductById,
  );
  const TopRateComp = useCallback(() => <TopRate />, []);

  // const handleAddToCart = useCallback(() => {
  //   dispatch(
  //     upduteActionCart(
  //       {
  //         productId: id,
  //         qty: 1,
  //       },
  //       () => navigation('/cart'),
  //     ),
  //   );
  // }, [dispatch, upduteActionCart]);
  useEffect(() => {
    dispatch(getProductById(id as string));
    // dispatch(getProfile());
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
        </>
      )}
      {TopRateComp()}
    </Container>
  );
};

export default ProductScreen;
