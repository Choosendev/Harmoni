import React from 'react';
import ListCardWrapper from '@src/components/Wrapper/ListCardWrapper';
import Image from 'next/image';
import Button from '@src/components/Button';
import MainContentWrapper from '../../components/Wrapper/MainContentWrapper';

const OrdersList = () => {
  return (
    <MainContentWrapper>
      <section className='mt-[72px]'>
        <ListCardWrapper>
          <div>
            {/* IMAGE AND TITLE */}
            <div className='flex gap-4 mb-6'>
              {/* IMAGE */}
              <div className='w-[72px] h-[72px] bg-white rounded-lg'> </div>
              {/* <div className='w-[141px] h-[141px] bg-white rounded-lg'> </div> */}
              <div className='md:flex gap-6 justify-between'>
                {/* TITLE AND DETAILS */}
                <div className='mb-4'>
                  {/* TITLE */}
                  <div className='md:flex gap-3.5 items-center'>
                    <h2 className='text-2xl mb-4'>Zepline starch beat</h2>
                    <p className='p-1 rounded-lg text-[#434343] bg-secondary inline-block text-xs mb-4'>
                      ref: 0889999234
                    </p>
                  </div>
                  {/* OTHER DETAILS */}
                  <div>
                    <p className='mb-3'>
                      by Kelvin Mark{' '}
                      <span className='text-[#505050] font-semibold ml-2'>
                        @mafikozolo
                      </span>
                    </p>
                    <p className='mb-4'>Premium License</p>
                    <p className='heading-3'>24-12-2022</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 justify-between items-end'>
                  <p className='heading-2'>NGN 200,000</p>
                  <Button buttonType='submit'>Download again</Button>
                </div>
              </div>
            </div>
          </div>
        </ListCardWrapper>
      </section>
    </MainContentWrapper>
  );
};

export default OrdersList;
