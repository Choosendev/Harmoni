import React from 'react';
import Profile from '@src/pagesSrc/User/Profile';

const User = () => {
  return (
    <div>
      <div>
        <div>
          <Layout styles='flex flex-col items-center'>
            <Profile />
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default User;
