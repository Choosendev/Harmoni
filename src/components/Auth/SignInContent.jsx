import React from 'react';

const SignInContent = () => {
  return (
    <section id='sign-in'>
      <div>
        <h1>Sign in</h1>
        <p>Enter details to signin, dont have an accoount signup</p>
        <form>
          <div>
            <label htmlFor='email'>Email address</label>
            <input id='email' name='email' placeholder='John Doe' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInContent;
