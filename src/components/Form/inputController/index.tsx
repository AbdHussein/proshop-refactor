import { ChangeEvent, ReactNode, FocusEvent } from 'react';
import { ErrorSection } from './errorSection';
import { FiledWrapper, Input, InputWrapper, Label, WrapperIcon } from './style';

interface InputControllerProps {
  name: string;
  label?: string;
  type?: string;
  errors?: string;
  defaultValue?: string;
  value?: string | number;
  touched?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  isRequired?: boolean;
  onBlur?: (e: React.FocusEvent<any, Element>) => any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  marginLeft?: string;
  disabled?: boolean;
}

export const InputController = ({ ...props }: InputControllerProps) => {
  return (
    <>
      <FiledWrapper marginLeft={props.marginLeft}>
        {props.label && <Label htmlFor={props.name}>{props.label}</Label>}

        <InputWrapper isError={!!props.errors?.length}>
          {props.icon && (
            <WrapperIcon JC="center" item="center">
              {props.icon}
            </WrapperIcon>
          )}

          <Input
            isError={!props.errors?.length}
            onChange={props.onChange}
            type={props.type}
            defaultValue={props.defaultValue}
            value={props.value}
            id={props.name}
            name={props.name}
            required={props.isRequired}
            placeholder={props.placeholder}
            autoComplete="off"
            style={{ fontFamily: 'mulish' }}
            disabled={props.disabled}
          />
        </InputWrapper>
        <ErrorSection errors={props.errors} touched={props.touched} />
      </FiledWrapper>
    </>
  );
};
