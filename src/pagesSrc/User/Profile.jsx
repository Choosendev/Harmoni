import React from 'react';
import ProfileHero from './ProfileHero';
import SalesCard from './SalesCard';
import SalesChart from './SalesChart';
import BeatList from '@src/components/BeatList';
import { CiLocationOn } from 'react-icons/ci';
import Image from 'next/image';

const Profile = () => {
  return (
    <div id='profile' className='pt-20 px-4'>
      <ProfileHero />
      <div className='mt-8'>
        <div className='flex justify-between mb-4'>
          <h2 className='text-2xl'>Intro</h2>
          <p className='text-xl'>Edit</p>
        </div>
        <p className='mb-7'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni .
        </p>

        {/* Contact Details: Locations and Social Links */}
        <div className='flex gap-8 items-center mb-12'>
          <div className='flex gap-6 items-center'>
            {/* Location Icon */}
            <span>
              <CiLocationOn />
            </span>
            <p>Lagos, Nigeria</p>
          </div>
          <div className='flex  gap-6'>
            {/* Social Icons */}
            <Image src='/assets/icons/facebook.svg' width={20} height={20} />
            <Image src='/assets/icons/instagram.svg' width={20} height={20} />
          </div>
        </div>
      </div>
      <SalesCard />
      <SalesChart />
      <BeatList />
    </div>
  );
};

export default Profile;
