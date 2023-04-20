import React from 'react';
import Layout from '@src/components/Layout';
import Auth from '@src/components/Auth/index.jsx';

const SignUp = () => {
  return (
    <div>
      <div>
        {' '}
        <div>
          <Layout styles='flex flex-col items-center'>
            <Auth page='sign-up' />
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
