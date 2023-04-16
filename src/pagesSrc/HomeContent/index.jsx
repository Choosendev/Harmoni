import React from 'react';
import PopularUploads from './PopularUploads';
import BeatsList from './BeatsList';

const HomeContent = () => {
  return (
    <div className='pt-10 px-4 sm:px-10 md:px-24 lg:px-40 xl:px-[286px]'>
      {/* <div className='pt-10 flex flex-col items-start sm:max-w-sm md:max-w-md lg:max-w-xl'> */}
      {/* CAROUSEL */}
      <PopularUploads />

      {/* FILTER BEATS LISTS*/}
      <div className=''></div>
      {/* BEAT CARDS */}
      <BeatsList />

      <div className='m-auto'>
        <button>...Load more</button>
      </div>
    </div>
  );
};

export default HomeContent;
