import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Counter, Image, Typography } from '../../../components';
import { deleteActionCart, upduteActionCart } from '../../../redux/Cart/action';
import { ReactComponent as Clear } from '../../../assets/clear.svg';
import { IItemCart } from '../../../redux/User/type';
import {
  CloseIcon,
  ItemTitle,
  WrapCounter,
  ItemContainer,
  ImgContainer,
} from '../styles';

interface IProps {
  data: IItemCart;
}

const CartList = ({ data }: IProps) => {
  const { product, qty } = data;
  const [count, setCount] = useState<number>(qty);
  const dispatch = useDispatch();

  const removeFromCart = useCallback(() => {
    dispatch(deleteActionCart(product._id));
  }, [count]);

  const handleChange = useCallback(
    (id, value) => {
      dispatch(upduteActionCart({ productId: id, qty: value }));
    },
    [dispatch],
  );
  useEffect(() => {
    setCount(qty);
  }, [qty]);

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
          value={count}
          onChange={(value: number) => handleChange(product._id, value)}
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
        ) : (
          ''
        )}
        <Typography
          variant="h2"
          fontSize="32px"
          fontWeight="bold"
          width="auto"
          text-align="right"
        >
          {(((product.price - product.discount) as number) * count)?.toFixed(2)}
        </Typography>
      </div>
    </ItemContainer>
  );
};

export default CartList;
