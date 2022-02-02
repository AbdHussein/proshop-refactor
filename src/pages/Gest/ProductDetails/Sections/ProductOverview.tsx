/* eslint-disable react/destructuring-assignment */
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import {
  Container,
  Button,
  Typography,
  Counter,
  GroupCircle,
} from '../../../../components';

import { upduteActionCart } from '../../../../redux/Cart/action';
import { ActionCartType } from '../../../../redux/Cart/type';
import { IProducts } from '../../../../redux/Product/type';
import { AppState } from '../../../../redux/store';
import { ProductImage } from './style';

const ProductOverview: React.FC<IProducts> = props => {
  const { id } = useParams<{ id: string }>();
  const { images, colors } = props;
  const [colorActive, setColorActive] = useState(colors?.[0] || '');
  const [currentImages, setImages] = useState<string[]>(images || []);
  const [counterValue, setcounterValue] = useState<number>(1);

  const handleCounter = (newValue: number) => {
    setcounterValue(newValue);
  };

  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const handleAddToCart = useCallback(() => {
    dispatch(
      upduteActionCart(
        {
          productId: id as string,
          qty: counterValue,
        },
        () => navigation('/cart'),
      ),
    );
  }, [dispatch, upduteActionCart, counterValue]);

  const handleImageClick = (index: number) => {
    setImages([
      images[index],
      ...images.slice(0, index),
      ...images.slice(index + 1),
    ]);
  };
  return (
    <Container align-Items="flex-start" justify-ontent="space-between">
      <Container direction="column" max-width="23rem">
        <Container width="100%" height="300px">
          <ProductImage size="xl" src={currentImages?.[0]} />
        </Container>
        <Container direction="row" margin=".1em 0">
          {currentImages?.map(
            (image, index) =>
              index > 0 && (
                <ProductImage
                  key={index.toString()}
                  src={image}
                  onClick={() => handleImageClick(index)}
                  border
                  height="6em"
                  width="5em"
                />
              ),
          )}
        </Container>
      </Container>
      <Container direction="column" margin-left="2em">
        <Container justify-Content="space-between">
          <Typography variant="h3" margin="0 1em" fontWeight="9000px">
            {props?.name}
          </Typography>
          <Typography bold variant="h1" margin="0 1em">
            {props?.price}$
          </Typography>
        </Container>

        <Container margin="1em 0">
          <Counter onChange={handleCounter} value={counterValue} />
        </Container>

        <Typography bold variant="h3" margin="0 1em">
          colors : {colorActive}
        </Typography>
        <GroupCircle
          colors={props?.colors || []}
          setColorActive={setColorActive}
        />

        <div style={{ marginLeft: 'auto ', marginBottom: ' 70px' }}>
          <Button
            padding="1.2em"
            width="24em"
            font-size="20px"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </div>

        <Typography
          variant="p"
          line-Height={1.5}
          text-Align="justify"
          font-Family="Mulish"
          font-Size=".8rem"
        >
          {props?.description}
        </Typography>
      </Container>
    </Container>
  );
};

export default ProductOverview;
