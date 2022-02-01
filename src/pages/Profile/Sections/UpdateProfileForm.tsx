import { Formik, Form } from 'formik';
import { ChangeEvent } from 'react';
import * as yup from 'yup';
import { InputController } from '../../../components';
import { Button } from '../../../components/Button/ButtonStyle';
import { formatDate_ } from '../../../utils/helper/formatDay';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(
      /^[A-Za-z ]+$/,
      'Should field with the alphabet with spaces format',
    ),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(
      /^[A-Za-z ]+$/,
      'Should field with the alphabet with spaces format',
    ),
  email: yup.string().email('Email is not valid').required('Email is required'),
  dateOfBirth: yup.date().defined('Date of birth is required'),
});

export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
}

interface IProps {
  data?: IProfile;
  handleSubmitProfile?: (values: IProfile) => void;
}

const UpdateProfileForm = ({ data, handleSubmitProfile }: IProps) => {
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={
        data || {
          firstName: '',
          lastName: '',
          email: '',
          dateOfBirth: '',
        }
      }
      onSubmit={(values: IProfile) => {
        handleSubmitProfile?.(values);
      }}
    >
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <InputController
            name="firstName"
            label="First Name"
            value={values.firstName}
            errors={errors.firstName}
            touched={touched.firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue('firstName', e.target.value);
            }}
            onBlur={() => {
              setFieldTouched('firstName', true);
            }}
          />
          <InputController
            name="lastName"
            label="Last Name"
            value={values.lastName}
            errors={errors.lastName}
            touched={touched.lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue('lastName', e.target.value);
            }}
            onBlur={() => {
              setFieldTouched('lastName', true);
            }}
          />
          <InputController
            name="email"
            label="Email"
            value={values.email}
            errors={errors.email}
            touched={touched.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue('email', e.target.value);
            }}
            onBlur={() => {
              setFieldTouched('email', true);
            }}
          />
          <InputController
            name="dateOfBirth"
            type="date"
            label="Date of Birth"
            value={
              values.dateOfBirth && formatDate_(values.dateOfBirth as string)
            }
            errors={errors.dateOfBirth as string}
            touched={touched.dateOfBirth as boolean}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue(
                'dateOfBirth',
                e.target.value && new Date(e.target.value).toISOString(),
              );
            }}
            onBlur={() => {
              setFieldTouched('dateOfBirth', true);
            }}
          />
          <Button type="submit" style={{ justifySelf: 'flex-end' }}>
            Update Profile
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateProfileForm;
