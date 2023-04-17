import React from 'react';
import PopularUploads from './PopularUploads';
import BeatsList from './BeatsList';
import ListCardWrapper from './ListCardWrapper';

const HomeContent = () => {
  return (
    <div className='pt-10 px-4 sm:px-10 md:px-24 lg:px-40 xl:px-[286px] w-full'>
      {/* CAROUSEL */}
      <PopularUploads />

      <div className=''>
        <h2 className='hidden md:block md:mb-7 md:text-xl lg:text-2xl'>Feed</h2>
        <div className='flex justify-between gap-6'>
          {/* Trending Search and Popular Producers */}
          <div className='hidden md:block'>
            {/* Trending Search */}
            <ListCardWrapper>
              <div>
                <h3 className='mb-6 font-semibold whitespace-nowrap'>
                  Trending Search
                </h3>
                <ul className='flex flex-col gap-10'>
                  <li>Mariam</li>
                  <li>William</li>
                </ul>
              </div>
            </ListCardWrapper>
            {/* Popular Producers */}
            <ListCardWrapper>
              <div>
                <h3 className='mb-6 font-semibold whitespace-nowrap'>
                  Popular Producer
                </h3>
                <ul className='flex flex-col gap-10'>
                  <li>Mariam</li>
                  <li>William</li>
                </ul>
              </div>{' '}
            </ListCardWrapper>
          </div>
          {/* BEAT CARDS */}
          <BeatsList />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
