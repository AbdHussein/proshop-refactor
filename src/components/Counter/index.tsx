import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Icon } from '..';
import { Button } from '../Button/ButtonStyle';
// eslint-disable-next-line import/extensions
import { Count, Value } from './counter.styled';

const Counter: React.FC<objectType> = ({ max, min = 1, value, onChange }) => {
  const handleChangeCounter = (name: string) => {
    // eslint-disable-next-line no-unused-expressions
    if (name === 'decrement') onChange?.(value - 1);
    else {
      onChange?.(value + 1);
    }
  };

  return (
    <>
      <Count>
        <Button
          width="2rem"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
          onClick={() => {
            handleChangeCounter('decrement');
          }}
          disabled={value === min}
        >
          <Icon icon={<AiOutlineMinus />} />
        </Button>
        <Value>{value}</Value>
        <Button
          width="2rem"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
          onClick={() => {
            handleChangeCounter('increment');
          }}
          disabled={value === max}
        >
          <Icon icon={<AiOutlinePlus />} />
        </Button>
      </Count>
    </>
  );
};

export default Counter;
