import * as Yup from 'yup';

export const initialSignupValues = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  password: '',
  confirmPassword: '',
};

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('first name is required'),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('last name is required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  userName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('user name is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const initialSigninValues = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  password: '',
  confirmPassword: '',
};

export const SigninSchema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('last name is required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});
