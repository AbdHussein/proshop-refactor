/* eslint-disable import/extensions */
import { RiLockPasswordFill } from 'react-icons/ri';
import { useFormik, FormikHelpers } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { GrUserNew } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useState } from 'react';
import {
  LoginText,
  LoginSubText,
  RightLogin,
  ImageShape,
  Wrapper,
  WrapperRemmber,
  ForgotPassword,
  ButtonSuginup,
  ButtonLogin,
  LeftLogin,
  ContainerLogin,
  FormContainer,
} from '../Login/style';
import {
  schemaValidationSignUp as validationSchema,
  ISchemaValidationSuginup,
} from '../../../utils/helper/validation';
// @ts-ignore
import LoginImage from '../../../assets/Images/singup.png';

import {
  Column,
  InnerColSection,
  InputController,
  CheckBox,
  Divider,
  Container,
  Image,
} from '../../../components';
import { AuthActions } from '../../../redux/Auth/action';
import { AppState } from '../../../redux/store';
import { TAllActionAuth } from '../../../redux/Auth/type';

const initialValues: ISchemaValidationSuginup = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik<ISchemaValidationSuginup>({
    initialValues,
    validationSchema,
    validateOnChange: validateAfterSubmit,
    enableReinitialize: true,
    onSubmit: async values => {
      dispatch(
        AuthActions.singUpSuccess(
          {
            email: values.email,
            password: values.password,
            firstName: values.name.split(' ')[0],
            lastName: values.name.split(' ')[1],
            passwordConfirmation: values.passwordConfirmation,
          },
          () => {
            navigate('/');
          },
        ),
      );
    },
  });
  return (
    <ContainerLogin>
      <InnerColSection>
        <Wrapper>
          <Container
            direction="column"
            overflow="hidden"
            justifyContent="space-between"
          >
            <LoginText>Signup.</LoginText>
            <LoginSubText>
              Sign up and get exclusive offers from us
            </LoginSubText>
            <FormContainer>
              <form
                style={{
                  width: '100%',
                }}
                onSubmit={formik.handleSubmit}
              >
                <Container width="100%" direction="column" padding={0}>
                  <InputController
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="your Name"
                    errors={formik.errors?.name}
                    onChange={formik.handleChange}
                    icon={<GrUserNew />}
                    value={formik.values.name}
                    touched={formik.touched.name}
                    onBlur={formik.handleBlur}
                  />
                  <InputController
                    name="email"
                    label="Enter your email address"
                    type="email"
                    placeholder="test@test.com"
                    errors={formik.errors?.email}
                    onChange={formik.handleChange}
                    icon={<AiOutlineMail />}
                    value={formik.values.email}
                  />
                  <InputController
                    name="password"
                    label="Enter your password"
                    type="password"
                    placeholder="enter password"
                    errors={formik.errors?.password}
                    onChange={formik.handleChange}
                    icon={<RiLockPasswordFill />}
                    value={formik.values.password}
                  />
                  <InputController
                    name="passwordConfirmation"
                    label="Confirm your password"
                    type="password"
                    placeholder="enter password"
                    errors={formik.errors?.passwordConfirmation}
                    onChange={formik.handleChange}
                    icon={<RiLockPasswordFill />}
                    value={formik.values.passwordConfirmation}
                  />
                </Container>
                <ButtonLogin type="submit">Sign up</ButtonLogin>
                <Column item="center">
                  <Divider thick="2px" width="100%" margin="40px 0px" />
                  <Column item="center">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <ForgotPassword>Have an account ? Login</ForgotPassword>
                    </Link>
                  </Column>
                </Column>
              </form>
            </FormContainer>
          </Container>
          <Container>
            <Image
              src={LoginImage}
              alt="image register continer"
              size="xxxl"
              responsive
            />
          </Container>
        </Wrapper>
      </InnerColSection>
    </ContainerLogin>
  );
};
export default Signup;
