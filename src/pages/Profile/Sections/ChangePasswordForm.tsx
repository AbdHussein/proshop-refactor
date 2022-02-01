import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { InputController } from '../../../components';
import { Button } from '../../../components/Button/ButtonStyle';

interface IPassword {
  password: string;
  passwordConfirmation: string;
}
interface IProps {
  handleChangePassword?: (values: IPassword) => void;
}

const ChangePasswordForm = ({ handleChangePassword }: IProps) => {
  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={yup.object().shape({
        password: yup.string().required('Password is required'),
        passwordConfirmation: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={values => {
        handleChangePassword?.(values);
      }}
    >
      {() => (
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
          />
          <InputController
            type="password"
            name="passwordConfirmation"
            label="Enter Password Confirmation"
          />
          <Button style={{ justifySelf: 'flex-end' }}>Update Password</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
