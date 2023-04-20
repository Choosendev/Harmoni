import React from 'react';
import Layout from '@src/components/Layout';
import Auth from '../../src/components/Auth';

const SignIn = () => {
  return (
    <div>
      {' '}
      <div>
        <Layout styles='flex flex-col items-center'>
          <Auth page='sign-in' />
        </Layout>
      </div>
    </div>
  );
};

export default SignIn;
