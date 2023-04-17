import React from 'react';
import Button from '../Button';

const ForgetPasswordContent = () => {
  return (
    <div>
      <section id='sign-in'>
        <div>
          <h1 className='text-2xl mb-4'>Sign in</h1>
          <p>Enter details to signin, dont have an account signup</p>
          <form className='pt-6 flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <label htmlFor='email'>Email address</label>
              <div className='flex gap-1 justify-between'>
                <input
                  id='email'
                  name='email'
                  placeholder='John Doe'
                  className='p-4'
                />
                <Button buttonType='submit'>Send OTP</Button>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor='otp'>OTP</label>
              <input
                id='otp'
                name='otp'
                placeholder='John Doe'
                className='p-4'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor='password'>New password</label>
              <input
                id='password'
                name='password'
                placeholder='******'
                className='p-4'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor='password'>Confirm password</label>
              <input
                id='password'
                name='password'
                placeholder='******'
                className='p-4'
              />
            </div>

            <Button buttonType='submit'>Change Password</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ForgetPasswordContent;
