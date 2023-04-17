import React from 'react';
import SignInContent from './SignInContent';
import SignUpContent from './SignUpContent';

const Auth = ({ page }) => {
  return (
    <div>
      <div>
        {page === 'sign-in' && <SignInContent />}
        {page === 'sign-up' && <SignUpContent />}
      </div>
    </div>
  );
};

export default Auth;
