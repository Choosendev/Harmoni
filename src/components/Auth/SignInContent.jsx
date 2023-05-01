import React from 'react';
// import { useRouter } from 'next/router';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login, reset } from '@src/states/slices/authSlice';

const SignInContent = () => {
  // const router = useRouter();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      // router('/');
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, router, dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <section id='sign-in'>
      <div>
        <h1 className='text-2xl mb-4'>Sign in</h1>
        <p>Enter details to signin, dont have an account signup</p>
        <form className='pt-6 flex flex-col gap-6'>
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
            <label htmlFor='password'>Password address</label>
            <input
              id='password'
              name='password'
              placeholder='******'
              className='p-4'
            />
          </div>

          <Button buttonType='submit'>Sign in</Button>
        </form>
      </div>
    </section>
  );
};

export default SignInContent;
