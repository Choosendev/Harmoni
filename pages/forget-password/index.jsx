import React from 'react';
import Layout from '@src/components/Layout';
import Auth from '@src/components/Auth';

const ForgetPassword = () => {
  return (
    <div>
      {' '}
      <div>
        <Layout styles='flex flex-col items-center'>
          <Auth page='forget-password' />
        </Layout>
      </div>
    </div>
  );
};

export default ForgetPassword;
