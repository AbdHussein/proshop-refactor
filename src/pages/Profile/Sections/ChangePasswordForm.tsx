import { Formik, Form } from 'formik';
import { ChangeEvent } from 'react';
import * as yup from 'yup';
import { InputController } from '../../../components';
import { Button } from '../../../components/Button/ButtonStyle';

export interface IPassword {
  password: string;
  passwordConfirmation: string;
}
interface IProps {
  handleSubmitPassword?: (values: IPassword) => void;
}

const ChangePasswordForm = ({ handleSubmitPassword }: IProps) => {
  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={yup.object().shape({
        password: yup
          .string()
          .matches(
            /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
            `Password should be 8 digits length at least, contains at least one Capital letter, contains at least one number.`,
          )
          .required('Password is required'),
        passwordConfirmation: yup
          .string()
          .required('Password Confirmation is required')
          .oneOf([yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={values => {
        handleSubmitPassword?.(values);
      }}
    >
      {({ errors, touched, setFieldValue, setFieldTouched }) => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <InputController
            type="password"
            name="password"
            label="Enter New Password"
            errors={errors.password}
            touched={touched.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue('password', e.target.value);
            }}
            onBlur={() => {
              setFieldTouched('password', true);
            }}
          />
          <InputController
            type="password"
            name="passwordConfirmation"
            label="Enter Password Confirmation"
            errors={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue('passwordConfirmation', e.target.value);
            }}
            onBlur={() => {
              setFieldTouched('passwordConfirmation', true);
            }}
          />
          <Button type="submit" style={{ justifySelf: 'flex-end' }}>
            Update Password
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
