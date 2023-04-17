import React from 'react';

const AuthHeader = ({ title, description }) => {
  return (
    <div>
      {' '}
      <h1 className='text-2xl mb-4'>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default AuthHeader;
