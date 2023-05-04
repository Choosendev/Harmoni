import React, { Fragment } from 'react';

const MainContentWrapper = ({ children }) => {
  return (
    <Fragment>
      <div className='pt-10 px-4 sm:px-10 md:px-24 lg:px-40 xl:px-[286px] w-full'>
        {children}
      </div>
    </Fragment>
  );
};

export default MainContentWrapper;
