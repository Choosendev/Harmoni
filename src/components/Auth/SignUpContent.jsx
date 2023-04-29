import React from 'react';
import Button from '../Button';
import AuthHeader from './AuthHeader';
import { useFormik } from 'formik';
import { SignupSchema, initialSignupValues } from '@src/schema/auth.schema';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '@src/states/slices/authSlice';
import Spinner from '../Spinner';

const SignUpContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const formik = useFormik({
    initialValues: initialSignupValues,
    validationSchema: SignupSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log('patience');
      // dispatch(register(values));
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section
      id='sign-up'
      className='pt-10 px-4 sm:px-10 md:px-24 lg:px-40 xl:px-[286px] w-full'
    >
      <div className='max-w-xs sm:max-w-md lg:max-w-xl m-auto'>
        <AuthHeader
          title='Sign up'
          description='Kindly provide the details below to get started'
        />

        <form
          className='pt-6 flex flex-col gap-6 '
          onSubmit={formik.handleSubmit}
        >
          <div className='flex gap-6 w-full justify-between'>
            <div className='flex flex-col gap-4 w-2/5'>
              <label htmlFor='firstName'>First Name</label>
              <input
                {...formik.getFieldProps('username')}
                id='firstName'
                name='firstName'
                placeholder='John Doe'
                className='p-4'
              />
            </div>
            <div className='flex flex-col gap-4 w-2/5'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                id='lastName'
                name='lastName'
                placeholder='John Doe'
                className='p-4'
              />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='email'>Email address</label>
            <input
              id='email'
              name='email'
              placeholder='John Doe'
              className='p-4'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='username'>Choose a username</label>
            <input
              id='username'
              name='username'
              placeholder='John Doe'
              className='p-4'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              placeholder='******'
              className='p-4'
            />
            <p className='break-words'>
              * Passwords must be at least 8 characters in length, at least one
              uppercase character, at least one lowercase character, and must
              contain at least one digit character OR a symbol.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='password'>Confirm Password</label>
            <input
              id='confirmPassword'
              name='confirmPassword'
              placeholder='******'
              className='p-4'
            />
          </div>

          <Button buttonType='submit'>Sign up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUpContent;
