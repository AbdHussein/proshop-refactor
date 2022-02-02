import { FormikErrors, FormikTouched } from 'formik';

// import { BiErrorAlt } from 'react-icons/bi';
import { ReactComponent as BiError } from '../../../assets/report.svg';
import { Row, Typography } from '../..';

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
      <Row JC="space-between" item="center" style={{ marginTop: '5px' }}>
        <Typography
          variant="p"
          fontFamily="mulish"
          className="text-xs"
          style={{ color: '#f44336' }}
        >
          {errors}
        </Typography>
        <BiError fill="#f44336" />
      </Row>
    );
  }
  return <></>;
};
