import React from 'react';
import MainContentWrapper from '../../components/Wrapper/MainContentWrapper';
import ListCardWrapper from '../HomeContent/ListCardWrapper';
import Button from '@src/components/Button';

const MyUploads = () => {
  return (
    <section id='my-uploads' className='mt-[72px]'>
      <MainContentWrapper>
        {/* Tab List */}
        <ListCardWrapper>
          {/* IMAGE AND TITLE */}
          <div className='flex gap-4 mb-6'>
            {/* IMAGE */}
            <div className='w-[72px] h-[72px] bg-white rounded-lg'> </div>
            {/* <div className='w-[141px] h-[141px] bg-white rounded-lg'> </div> */}
            <div className='md:flex gap-6 justify-between'>
              {/* TITLE AND DETAILS */}
              <div className='mb-4'>
                {/* TITLE */}
                <h2 className='text-2xl mb-4'>Zepline starch beat</h2>
                {/* OTHER DETAILS */}
                <div className='grid grid-cols-2 gap-x-4 gap-y-3'>
                  <p>Size:</p>
                  <p>1.4Mb</p>
                  <p>Genre:</p>
                  <p>Fuji</p>
                  <p>Amount:</p>
                  <p>20,000</p>
                  <p>Purchase:</p>
                  <p>20</p>
                </div>
              </div>
              <div className='md:flex items-end'>
                <Button buttonType='submit' classname='bg-[#EB5757]'>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </ListCardWrapper>
      </MainContentWrapper>
    </section>
  );
};

export default MyUploads;
