import React from 'react';
import { Label } from '../inputController/style';
import { RadioButtonContainer } from './style';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  name: string;
  label: string;
  options: IOption[];
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonGroup = ({
  name,
  label,
  options,
  value,
  onChange,
}: IProps) => {
  return (
    <RadioButtonContainer>
      <Label>{label}</Label>
      {options.map(option => (
        <label htmlFor="name" key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </RadioButtonContainer>
  );
};

export default RadioButtonGroup;
