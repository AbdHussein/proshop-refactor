import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/add.svg';
import { ReactComponent as Minus } from '../../assets/remove.svg';

import { Button } from '../Button/ButtonStyle';
// eslint-disable-next-line import/extensions
// import { Count, Value } from './counter.styled';

const Counter: React.FC<objectType> = ({ max, min = 1, value, onChange }) => {
  const handleChangeCounter = (name: string) => {
    // eslint-disable-next-line no-unused-expressions
    if (name === 'decrement') onChange?.(value - 1);
    else {
      onChange?.(value + 1);
    }
  };

  const Count = styled.div`
    width: 8rem;
    height: 1.8rem;
    display: flex;
    flex-direction: row;
  `;

  const Value = styled.div`
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eeeeee;
  `;

  return (
    <>
      <Count style={{ width: '40%' }}>
        <Button
          width="3rem"
          padding="auto"
          height="50px"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          onClick={() => {
            handleChangeCounter('decrement');
          }}
          disabled={value === min}
        >
          <Minus />
        </Button>
        <Value>{value}</Value>
        <Button
          width="3rem"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="auto"
          height="50px"
          onClick={() => {
            handleChangeCounter('increment');
          }}
          disabled={value === max}
        >
          <Plus />
        </Button>
      </Count>
    </>
  );
};

export default Counter;
