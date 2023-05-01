import React, { useEffect } from 'react';
import Button from '../Button';
import { useRouter } from 'next/router';
import AuthHeader from './AuthHeader';
import { useFormik } from 'formik';
import { SignupSchema, initialSignupValues } from '@src/schema/auth.schema';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '@src/states/slices/authSlice';
import Spinner from '../Spinner';

const SignUpContent = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      router.push('/');
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, router, dispatch]);

  const formik = useFormik({
    initialValues: initialSignupValues,
    validationSchema: SignupSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
      toast.error('Good');
      // dispatch(register(values));
    },
  });

  // if (isLoading) {
  //   return <Spinner />;
  // }

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
                className='p-4 text-black'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='text-xs text-red-500 -mt-2'>
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className='flex flex-col gap-4 w-2/5'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                id='lastName'
                name='lastName'
                placeholder='John Doe'
                className='p-4 text-black'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className='text-xs text-red-500 -mt-2'>
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='email'>Email address</label>
            <input
              id='email'
              name='email'
              placeholder='John Doe'
              className='p-4 text-black'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-xs text-red-500 -mt-2'>
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='username'>Choose a username</label>
            <input
              id='username'
              name='username'
              placeholder='John Doe'
              className='p-4 text-black'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className='text-xs text-red-500 -mt-2'>
                {formik.errors.userName}
              </div>
            ) : null}
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              placeholder='******'
              className='p-4 text-black'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='text-xs text-red-500 -mt-2'>
                {formik.errors.password}
              </div>
            ) : null}
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
              className='p-4 text-black'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className='text-xs text-red-500 -mt-2'>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <Button buttonType='submit'>Sign up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUpContent;
