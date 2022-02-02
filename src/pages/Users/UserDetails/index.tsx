/* eslint-disable import/extensions */
import { Formik, Form } from 'formik';
import { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import { Button, InputController, SpinnerContainer } from '../../../components';
import RadioButtonGroup from '../../../components/Form/radioButton';
import { AppState } from '../../../redux/store';
import { getUserById, updateUser } from '../../../redux/User/action';
import { formatDate_ } from '../../../utils/helper/formatDay';
import { notify } from '../../../utils/helper/notification';
import { Container, Title } from '../../Orders/Orders.styled';

const Section = styled.div`
  width: 100%;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  background-color: ${props => props.theme.background?.paper};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;

  & > div {
    width: 40%;
  }
`;

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

const UserDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user: { isLoading, data },
  } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    dispatch(getUserById(params.id as string));
  }, [dispatch]);

  const handleSubmit = useCallback((values: any) => {
    dispatch(updateUser(params.id as string, values));
    notify('success', 'User updated successfully');
    navigate('/users');
  }, []);

  return (
    <Container>
      <Title>User Details</Title>
      {isLoading ? (
        <SpinnerContainer />
      ) : (
        <Formik
          initialValues={{
            firstName: data?.firstName as string,
            lastName: data?.lastName as string,
            email: data?.email as string,
            dateOfBirth: data?.dateOfBirth as string,
            isAdmin: data?.isAdmin as boolean,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, setFieldValue, setFieldTouched }) => (
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                width: '80%',
                margin: 'auto',
                gap: '20px',
              }}
            >
              <Section>
                <div>
                  <InputController
                    name="firstName"
                    label="First Name"
                    value={values.firstName}
                    errors={errors.firstName}
                    touched={touched.firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFieldValue('firstName', e.target.value)
                    }
                    onBlur={() => setFieldTouched('firstName', true)}
                  />
                  <InputController
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    errors={errors.lastName}
                    touched={touched.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFieldValue('lastName', e.target.value)
                    }
                    onBlur={() => setFieldTouched('lastName', true)}
                  />
                  <InputController
                    name="email"
                    label="Email"
                    value={values.email}
                    errors={errors.email}
                    touched={touched.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFieldValue('email', e.target.value)
                    }
                    onBlur={() => setFieldTouched('email', true)}
                  />
                </div>
                <div>
                  <InputController
                    type="date"
                    name="dateOfBirth"
                    label="Date of Birth"
                    value={
                      values.dateOfBirth &&
                      formatDate_(values.dateOfBirth as string)
                    }
                    errors={errors.dateOfBirth}
                    touched={touched.dateOfBirth}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFieldValue(
                        'dateOfBirth',
                        e.target.value &&
                          new Date(e.target.value).toISOString(),
                      )
                    }
                    onBlur={() => setFieldTouched('dateOfBirth', true)}
                  />
                  <RadioButtonGroup
                    name="isAdmin"
                    label="Is Admin"
                    options={[
                      { label: 'Admin', value: 'true' },
                      { label: 'Not Admin', value: 'false' },
                    ]}
                    value={values.isAdmin ? 'true' : 'false'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFieldValue('isAdmin', e.target.value === 'true')
                    }
                  />
                </div>
              </Section>
              <Button type="submit" width="fit-content">
                Update User
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default UserDetails;
