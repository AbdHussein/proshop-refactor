import { FormikErrors, FormikTouched } from 'formik';

import { BiErrorAlt } from 'react-icons/bi';
import { Row, Typography } from '../..';
import { ErrorWrapper } from './style';

interface Props {
  touched?:
    | FormikTouched<any>
    | FormikTouched<string>
    | FormikTouched<number>
    | boolean;
  errors?: FormikErrors<Date | any> | string;
}

export const ErrorSection = ({ touched, errors }: Props) => {
  if (touched && errors) {
    return (
      <Row JC="space-between" item="center">
        <Typography
          variant="p"
          fontFamily="mulish"
          className="text-xs"
          color="red"
        >
          {errors}
        </Typography>
        <BiErrorAlt />
      </Row>
    );
  }
  return <></>;
};
