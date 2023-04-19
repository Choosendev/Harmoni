import Image from 'next/image';
import React from 'react';
import Button from '../../components/Button';

const ProfileHero = () => {
  return (
    <section id='profile-hero'>
      <div>
        <h1>Profile</h1>
        <div className=''>
          <div className='flex items-center p-4'>
            <div>
              <Image />
            </div>
            <div>
              <p>Banny Anderson</p>
              <p>@andybanny</p>
            </div>
          </div>
          <Button page='upload'>UPLOAD BEATS</Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
