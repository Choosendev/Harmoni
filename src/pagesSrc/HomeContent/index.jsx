import React from 'react';
import PopularUploads from './PopularUploads';
import BeatsList from './BeatsList';

const HomeContent = () => {
  return (
    <div className='pt-10 px-4 sm:px-10 md:px-24 lg:px-40 xl:px-[286px]'>
      {/* <div className='pt-10 flex flex-col items-start sm:max-w-sm md:max-w-md lg:max-w-xl'> */}
      {/* CAROUSEL */}
      <PopularUploads />

      <div className=''>
        <h2>Feed</h2>
        {/* Trending Search and Popular Producers */}
        <div>
          {/* Trending Search */}
          <div>
            <h3>Trending Search</h3>
            <ul>
              <li>Mariam</li>
              <li>William</li>
            </ul>
          </div>
          {/* Popular Producers */}
          <div>
            <h3>Popular Producer</h3>
            <ul>
              <li>Mariam</li>
              <li>William</li>
            </ul>
          </div>{' '}
        </div>
        {/* BEAT CARDS */}
        <BeatsList />
      </div>
    </div>
  );
};

export default HomeContent;
