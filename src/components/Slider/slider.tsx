/* eslint-disable no-underscore-dangle */
import React, { useState, CSSProperties } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/leftArrowIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/rightArrowIcon.svg';
import { SliderItem } from './SliderItem';
import { Arrow, Dot, SliderSection } from './SliderStyle';
import { Container } from '..';
import { IProducts } from '../../redux/Product/type';

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  backgroundColor: '#f2f2f2',
};

interface ProductItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}
interface IProps {
  data?: IProducts[];
}
export const Slider = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  //   const handleChangeIndex = () => {};
  const handleLeft = () => {
    if (sliderIndex === 0) {
      setSliderIndex(2);
    } else setSliderIndex(sliderIndex - 1);
  };
  const handleRight = () => {
    if (sliderIndex === 2) {
      setSliderIndex(0);
    } else setSliderIndex(sliderIndex + 1);
  };

  const sliders =
    data &&
    data.length &&
    data.map(item => (
      <SliderItem
        _id={item._id}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.images[0]}
      />
    ));

  return (
    <Container direction="column" overflow="hidden" position="relative">
      <SliderSection>
        <SwipeableViews
          index={sliderIndex}
          style={cssStyle}
          enableMouseEvents
          onChangeIndex={setSliderIndex}
        >
          {sliders}
        </SwipeableViews>
        <Container
          flexDirection="row"
          padding="1em"
          margin="auto"
          width="auto"
          height="50px"
          justifyContent="center"
          position="absolute"
          bottom="10px"
          left="50%"
          transform="translateX(-50%)"
          backgroundColor="transparent"
        >
          <Arrow>
            <ArrowLeftIcon onClick={handleLeft} />
          </Arrow>
          {Array(3)
            .fill(0)
            .map((x, index) => (
              <Dot
                width="25px"
                isGrey={sliderIndex !== index}
                onClick={() => setSliderIndex(index)}
              />
            ))}
          <Arrow>
            <ArrowRightIcon onClick={handleRight} />
          </Arrow>
        </Container>
      </SliderSection>
    </Container>
  );
};
