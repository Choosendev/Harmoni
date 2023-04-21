import React from 'react';
import Button from '@src/components/Button';
import ButtonOutline from '@src/components/Button/ButtonOutline';
import ListCardWrapper from '../HomeContent/ListCardWrapper';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SalesCard = () => {
  return (
    <ListCardWrapper>
      <section id='sales'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl'>Sales</h2>
          {/* Eye Toggle Icon Here */}
          <div>
            <AiOutlineEye size={24} />
            {/* <AiOutlineEyeInvisible size={24}/> */}
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-2 mb-6'>
            <p className=''>Total amount</p>
            <p className='text-lg'>NGN 90,000</p>
          </div>
          <div className='flex flex-col gap-2 mb-8'>
            <p className=''>Total sales</p>
            <p className='text-lg'>80</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button page='withdraw'>Withdraw</Button>
            <ButtonOutline page='add-account'>Add account</ButtonOutline>
          </div>
        </div>
      </section>
    </ListCardWrapper>
  );
};

export default SalesCard;
