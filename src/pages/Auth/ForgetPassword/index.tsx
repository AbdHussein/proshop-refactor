import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Image, Typography } from '../../../components';
import { Wrapper } from '../Login/style';
import { Container, FormWrapper } from './ForgetPassword.styled';
import Forgetpassword from '../../../assets/Images/ForgetPassword.png';
import { formSchema } from './ForgetPassword.validation';
// eslint-disable-next-line import/order
import { Form, Formik } from 'formik';

export default function ForgetPassword() {
  const handleSubmit = useCallback(values => {}, []);

  return (
    <Container>
      <FormWrapper>
        <Typography variant="h2" fontWeight="900">
          Forgot Your Password?
        </Typography>
        <Typography variant="h6" fontSize="32px" fontWeight="500">
          Enter your registered email below to receive password reset
          instruction
        </Typography>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form style={{ minWidth: '20vw' }}>
              <input name="email" placeholder="name@example.com" />
              <Button type="submit" onClick={() => {}}>
                <Typography
                  variant="h6"
                  color="#000"
                  fontSize="22px"
                  fontWeight="500"
                >
                  Send
                </Typography>
              </Button>
              <Divider />
              <Typography variant="h6" color="text.secondary">
                Remembered Your Password ? <Link to="/login">Login</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <Image src={Forgetpassword} size="xxxl" responsive />
    </Container>
  );
}
