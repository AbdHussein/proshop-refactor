/* eslint-disable react/destructuring-assignment */
import React, { useCallback, useEffect, useState } from 'react';
import { BsBookmarks } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import {
  Container,
  Button,
  Typography,
  Icon,
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

  const { images, colors, _id } = props;
  const [colorActive, setColorActive] = useState(colors?.[0] || '');
  const [memory, setMemory] = useState('');
  const [currentImages, setImages] = useState<string[]>(images || []);
  const [count, setCount] = useState<number>(1);

  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const handleAddToCart = useCallback(() => {
    dispatch(
      upduteActionCart(
        {
          productId: id as string,
          qty: count,
        },
        () => navigation('/cart'),
      ),
    );
    console.log('count', count);
  }, [dispatch, upduteActionCart, count]);

  const handleImageClick = (index: number) => {
    setImages([
      images[index],
      ...images.slice(0, index),
      ...images.slice(index + 1),
    ]);
  };
  return (
    <Container
      align-Items="flex-start"
      // flex-Wrap="wrap"
      justify-ontent="space-between"
    >
      <Container direction="column" max-width="23rem">
        <Container padding="2em" width="80%" height="300px">
          <ProductImage size="md" src={currentImages?.[0]} />
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
          <Typography variant="h3" font-Size="1.2rem" bold>
            {props?.name}
          </Typography>
          <Typography bold variant="h2" font-Size="1.3rem">
            {props?.price}$
          </Typography>
        </Container>

        <Container margin="1em 0">
          <Counter
            max={props?.countInStock}
            min={1}
            onFinish={setCount}
            value={count}
          />
        </Container>
        <Container>
          <Typography variant="h3" color="grey">
            Color:
          </Typography>
          <Typography bold variant="h3" margin="0 1em">
            {colorActive}
          </Typography>
        </Container>
        <GroupCircle
          colors={props?.colors || []}
          setColorActive={setColorActive}
        />
        <Container>
          {props?.size && (
            <>
              <Typography variant="h3" color="grey">
                Size:
              </Typography>
              <Typography bold variant="h3" margin="0 1em">
                {props?.size}
              </Typography>
            </>
          )}
        </Container>
        <Container
          margin="1em 0 1em 0"
          justify-Content="space-between"
          align-Items="center"
        >
          <Container>
            <Button
              margin="0 1em 0 0"
              padding=".6em 2em"
              onClick={() => setMemory('64GB')}
              brand={memory === '64GB'}
            >
              64GB
            </Button>
            <Button
              margin="0 1em"
              padding=".6em 2em"
              onClick={() => setMemory('128GB')}
              brand={memory === '128GB'}
            >
              128GB
            </Button>
            <Button
              margin="0 1em"
              padding=".6em 2em"
              onClick={() => setMemory('256GB')}
              brand={memory === '256GB'}
            >
              256GB
            </Button>
          </Container>
          <Button width="3rem" margin="0 1em">
            <Icon size="20" icon={<BsBookmarks />} />
          </Button>
          <Button brand padding=".8em" width="15em" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Container>
        <Typography
          variant="p"
          line-Height={1.5}
          text-Align="justify"
          font-Family="Mulish"
          font-Size=".8rem"
        >
          {props?.description}
        </Typography>
        <Typography font-size=".8rem" margin="1rem 0">
          {props?.categories?.join(', ')}
        </Typography>
      </Container>
    </Container>
  );
};

export default ProductOverview;
