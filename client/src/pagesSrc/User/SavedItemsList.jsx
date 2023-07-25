import React from 'react';
import ListCardWrapper from '@src/components/Wrapper/ListCardWrapper';
import Button from '@src/components/Button';
import MainContentWrapper from '../../components/Wrapper/MainContentWrapper';
import { AiOutlineClose } from 'react-icons/ai';

const SavedItemsList = () => {
  return (
    <MainContentWrapper>
      <section className='mt-[72px]'>
        <ListCardWrapper>
          {' '}
          <div className='relative'>
            {/* IMAGE AND TITLE */}
            <div className='flex gap-4 mb-6'>
              {/* IMAGE */}
              <div className='w-[72px] h-[72px] bg-white rounded-lg'> </div>

              {/* TITLE AND DETAILS */}
              <div>
                {/* TITLE */}
                <h2 className='heading-2'>Zepline starch beat</h2>
                <button className='absolute right-0 top-0'>
                  <AiOutlineClose color='#8E8E8E' size={16} />
                </button>
                {/* OTHER DETAILS */}
                <div className='mb-3'>
                  <p>
                    by Kelvin Mark
                    <span className='text-[#505050] font-semibold ml-2'>
                      @mafikozolo
                    </span>
                  </p>
                  <p>Released on 24th June</p>
                </div>
              </div>
            </div>

            <div className='inline-flex justify-between gap-12'>
              <p>USD 260</p>
              <Button buttonType='submit'>BUY NOW</Button>
            </div>
          </div>
        </ListCardWrapper>
      </section>
    </MainContentWrapper>
  );
};

export default SavedItemsList;
