import React from 'react';
import Button from '../Button';

const SignInContent = () => {
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
