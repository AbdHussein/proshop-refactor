/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import { useState, CSSProperties } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from 'styled-components';
import { RowInnerSlider } from './styles';
import { Container } from '../..';
import ComplexCard from '../../Card/productCard';
import { Dot } from '../../Slider/SliderStyle';
import { DeviderTitle } from '../../DeviderTitle/deviderTitle';
import { IProducts } from '../../../redux/Product/type';

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const DotsStyles: CSSProperties = {
  color: '#707070',
  zIndex: 2,
  margin: 10,
};

export interface IProduct {
  _id: string;
  image: string;
  price: number;
  name: string;
  rating: number;
  discount: number;
}
interface IProps {
  data?: IProducts[];
}
export const FeaturedProduct = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);
  const theme = useTheme();
  const handleSize = () => {
    setWidth(window.innerWidth);
    setSliderIndex(0);
  };

  const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 1100 ? 2 : 1;
  const getSlider = () => {
    const chunks: any = [];

    data?.map((i: any, idx: number) => {
      if (idx % chunkSize === 0) {
        chunks.push([]);
      }

      const firstArrayLength = chunks.length;
      const secondArrayLength = chunks[firstArrayLength - 1].length;

      chunks[firstArrayLength - 1][secondArrayLength] = i;

      return i;
    });
    return chunks.map((i: any, inx: number) => (
      <Container key={inx} flex-wrap="wrap">
        {i.map((item: IProducts) => (
          <ComplexCard key={item._id} {...item} image={item.images[0]} />
        ))}
      </Container>
    ));
  };

  return (
    <Container
      direction="column"
      align-items="center"
      width="100%"
      background={theme.background?.paper}
    >
      <Container direction="column" width="85.4%">
        <DeviderTitle title="Featured Product" position="center" />
      </Container>

      <Container direction="row" justify-content="space-between">
        <SwipeableViews
          enableMouseEvents
          index={sliderIndex}
          style={cssStyle}
          onChangeIndex={setSliderIndex}
        >
          {getSlider()}
        </SwipeableViews>
      </Container>
      <Container flexDirection="row" padding="1em" width="auto">
        {Array(getSlider().length)
          .fill(0)
          .map((x, i) => (
            <Dot
              style={DotsStyles}
              width="14px"
              isGrey={sliderIndex !== i}
              onClick={() => setSliderIndex(i)}
            />
          ))}
      </Container>
      {/* <Container height="20px" /> */}
    </Container>
  );
};
