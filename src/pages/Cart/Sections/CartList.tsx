import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Counter, Image, Typography } from '../../../components';
import { deleteActionCart, upduteActionCart } from '../../../redux/Cart/action';
import { ReactComponent as Clear } from '../../../assets/clear.svg';
import { ActionCartType } from '../../../redux/Cart/type';
import { AppState } from '../../../redux/store';
import { IItemCart } from '../../../redux/User/type';
import {
  CloseIcon,
  OldPrice,
  ItemTitle,
  WrapCounter,
  ItemContainer,
  ImgContainer,
} from '../styles';

interface IProps {
  data: IItemCart;
}

const CartList = ({ data }: IProps) => {
  const { product, qty, itemTotalPrice } = data;
  const [count, setCount] = useState<number>(qty);
  const dispatch = useDispatch();
  // const handleRemoveFormCart = (id: string) => {
  // };

  const removeFromCart = useCallback(() => {
    dispatch(deleteActionCart(product._id));
    // dispatch(upduteActionCart({ productId: product._id, qty: 0 }));
    setCount(0);
  }, [count]);

  const handleIncress = useCallback(() => {
    dispatch(upduteActionCart({ productId: product._id, qty: count + 1 }));
    setCount(prev => prev + 1);
  }, [count]);

  const handleDecress = useCallback(() => {
    dispatch(upduteActionCart({ productId: product._id, qty: count - 1 }));
    setCount(prev => prev - 1);
  }, [count]);

  return (
    <ItemContainer
      height="180px"
      border-radius="16px"
      position="relative"
      padding="1em"
      margin-bottom="30px"
      justify-content="space-between"
    >
      <CloseIcon onClick={removeFromCart}>
        <Clear />
      </CloseIcon>

      <ImgContainer
        width="60%"
        align-items="start"
        justify-content="space-between"
      >
        <Image src={product.images[0]} width="40%" fit="cover" />
        <ItemTitle to={`/product/${product._id}`}>
          <Typography
            children={product.name}
            variant="h2"
            margin-left="0.5em"
            padding="0.5em"
            overflow-wrap="break-word"
          />
        </ItemTitle>
      </ImgContainer>
      <WrapCounter>
        <Counter
          max={product?.countInStock}
          min={1}
          onFinish={setCount}
          value={count}
          handleIncrease={handleIncress}
          handleDecrease={handleDecress}
        />
      </WrapCounter>
      <div>
        {product.discount ? (
          <Typography
            fontSize="20px"
            letter-spacing="0.48px"
            color="secondary"
            style={{ textDecoration: 'line-through' }}
          >
            {product.price}
          </Typography>
        ) : null}
        <Typography
          children={String(`${product.discount}`)}
          variant="h2"
          fontSize="32px"
          fontWeight="bold"
          width="auto"
          text-align="right"
        />
      </div>
    </ItemContainer>
  );
};

export default CartList;
