import React, { Fragment } from 'react';
import MainContentWrapper from '@src/components/Wrapper/MainContentWrapper';
import AudioPlayer from './AudioPlayer';
import BuyingOptions from './BuyingOptions';

const PurchaseReview = () => {
  return (
    <Fragment>
      <MainContentWrapper>
        <div className='pt-20'>
          <h1 className='pb-10 text-3xl md:text-[32px]'>Review</h1>
          <div>
            <div className='flex gap-3 items-start'>
              {/* IMAGE */}
              <div className='w-36 h-36 bg-sky-300 rounded-lg'></div>
              <div className='flex flex-col gap-4'>
                <p>Type: Hip Hop</p>
                <p>Wintspread</p>
                <p className='text-sm text-[#E2E2E2]'>
                  beat by Winifred <span>@drew-chidi</span>
                </p>
                <p className='text-sm text-[#E2E2E2]'>
                  released on 23 November 2022
                </p>
              </div>
            </div>

            {/* MUSIC PROGRESS BAR */}

            <div className='py-2.5 my-10'>
              {/* <AudioPlayer /> */}
              <audio controls autoplay class='audio-player'>
                <source
                  src='http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3'
                  type='audio/mpeg'
                />
              </audio>
            </div>
          </div>
        </div>

        {/* BUYING OPTIONS */}
        <BuyingOptions />
      </MainContentWrapper>
    </Fragment>
  );
};

export default PurchaseReview;
