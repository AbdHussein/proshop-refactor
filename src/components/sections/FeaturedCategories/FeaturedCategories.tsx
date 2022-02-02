/* eslint-disable import/extensions */
import React, { useState, CSSProperties } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { CategoryCard, Container } from '../..';
import { Divider, Title } from '../../DeviderTitle/style';
import { CategDots } from '../../Slider/SliderStyle';
import { RowInnerSlider, WrapperDots } from '../FeaturedProducts/styles';
import { IGetAllCategory, IProducts } from '../../../redux/Product/type';

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
interface IProps {
  data?: IGetAllCategory[];
}
export const FeaturedCategories = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const chunkSize =
    window.innerWidth > 1100 ? 4 : window.innerWidth > 1100 ? 3 : 1;
  const chunks: any = [];
  const getSlider = () => {
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
      <RowInnerSlider key={inx}>
        {i.map((item, index) => (
          <CategoryCard
            name={item.name}
            image={item.image}
            key={index + item.name}
          />
        ))}
      </RowInnerSlider>
    ));
  };

  return (
    <>
      <Container
        direction="column"
        width="100%"
        justify-content="center"
        align-items="center"
        margin-top="60px"
        flex-wrap="wrape"
      >
        <Container direction="column" width="85.4%">
          <Title>Featured Categories</Title>
          <Divider width="15%" height="7px" color="#edc298" />
          <Divider width="100%" height=".1px" color="#707070" />
        </Container>
        <Container direction="row" width="90%">
          <SwipeableViews
            enableMouseEvents
            index={sliderIndex}
            style={cssStyle}
            onChangeIndex={setSliderIndex}
          >
            {getSlider()}
          </SwipeableViews>
        </Container>
        <WrapperDots item="center">
          {Array(getSlider().length / 2)
            .fill(0)
            .map((x, i) => (
              <CategDots
                style={DotsStyles}
                width="14px"
                isGrey={sliderIndex !== i}
                onClick={() => setSliderIndex(i)}
              />
            ))}
        </WrapperDots>
      </Container>
    </>
  );
};
