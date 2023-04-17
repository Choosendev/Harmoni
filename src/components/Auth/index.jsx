import React from 'react';
import SignInContent from './SignInContent';
import SignUpContent from './SignUpContent';

const Auth = ({ page }) => {
  return (
    <div>
      <div className='pt-[72px] sm:pt-24 md:pt-40'>
        {page === 'sign-in' && <SignInContent />}
        {page === 'sign-up' && <SignUpContent />}
      </div>
    </div>
  );
};

export default Auth;
