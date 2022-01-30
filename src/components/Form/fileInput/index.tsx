import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { InputFile, WarperFileBox } from '../checkBox/style';
import { Image } from '../..';

interface Props {
  name?: string;
  label: string;
  errors?: string;
  defaultValue?: boolean;
  placeholder?: string;
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  margin?: string;
  src?: string;
}

export const FileInput = ({ name, src, ...props }: Props) => {
  return (
    <WarperFileBox margin={props.margin} htmlFor={name}>
      {src ? <Image src={src} /> : <AiOutlinePlus size="40px" />}
      <InputFile
        onChange={props.onChange}
        id={name}
        // name={name}
        multiple={false}
      />
    </WarperFileBox>
  );
};
