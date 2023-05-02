import Image from 'next/image';
import React from 'react';
import Button from '../../components/Button';
import { BiCamera } from 'react-icons/bi';

const ProfileHero = () => {
  return (
    <section id='profile-hero'>
      <div>
        <h1 className='text-4xl font-bold mb-6'>Profile</h1>
        <div
          className='relative bg-cover bg-center px-4 pt-4 pb-6'
          style={{
            backgroundImage: `url(${'/assets/images/beat-card-bg.png'})`,
          }}
        >
          {' '}
          <div className='flex items-center justify-center px-4 pt-4 pb-7 gap-5'>
            <div className='relative'>
              <Image
                src='/assets/images/profile-picture.png'
                width={120}
                height={120}
                alt='user profile'
              />
              <div className='absolute bottom-0'>
                <button className='p-2 bg-white text-black mb-4 rounded-lg flex justify-between gap-2 items-center text-xs'>
                  <span className='flex items-center'>
                    <BiCamera size={24} />
                  </span>
                  Upload image
                </button>
              </div>
            </div>
            <div>
              <p className='p-2 bg-[#0A0A09] mb-4 rounded-lg'>Banny Anderson</p>
              <p className='p-2 bg-[#0A0A09] rounded-lg'>@andybanny</p>
            </div>
          </div>
          <Button page='upload' classname='w-1/2 md:w-2/5'>
            UPLOAD BEATS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
