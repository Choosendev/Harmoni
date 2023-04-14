import React from 'react';
import Button from '@src/components/Button';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className='px-4 sm:px-10 lg:px-24'>
      <div className='bg-hero-pattern  bg-cover bg-center bg-no-repeat pt-[72px] pb-6 sm:pt-24 md:pt-40 md:pb-14'>
        <div className='m-auto text-center'>
          <div className='px-12 mb-4 sm:mb-8'>
            <h1 className='mb-4 font-semibold text-xl tracking-tighter md:text-2xl lg:text-4xl'>
              Find and upload trending beat for music production
            </h1>
            <p className='px-7 lg:text-xl'>
              Preview, upload, buy beats and vocals for you projects
            </p>
          </div>

          {/* SEARCH AND BUTTON */}
          <div className='inline-flex flex-col gap-6 sm:flex-row'>
            <div className=' inline-flex items-center justify-center border rounded-lg border-white w-content p-4 '>
              <input
                type='text'
                placeholder='Search'
                // value={searchInput}
                // onChange={handleSearchInput}
                // onKeyDown={handleKeyDown}
                className='bg-transparent'
              />
              <div className='flex items-center'>
                <FiSearch size={20} color='#fff' />
              </div>
            </div>
            <Button page='/'>UPLOAD YOUR BEATS</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
