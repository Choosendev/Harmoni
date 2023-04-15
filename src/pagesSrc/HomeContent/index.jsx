import React from 'react';
import PopularUploads from './PopularUploads';

const HomeContent = () => {
  return (
    <div className='flex justify-center sm:max-w-sm md:max-w-md lg:max-w-xl'>
      {/* CAROUSEL */}
      <PopularUploads />
      {/* FILTER */}

      {/* BEAT CARDS */}

      <div className='m-auto'>
        <button>...Load more</button>
      </div>
    </div>
  );
};

export default HomeContent;
