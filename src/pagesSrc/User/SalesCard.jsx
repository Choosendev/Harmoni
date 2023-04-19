import React from 'react';
import Button from '@src/components/Button';
import ButtonOutline from '@src/components/Button/ButtonOutline';

const SalesCard = () => {
  return (
    <section id='sales'>
      <div className='flex justify-between items-center'>
        <h2>Sales</h2>
        {/* Eye Toggle Icon Here */}
      </div>
      <div>
        <div className='flex flex-col gap-2'>
          <p className=''>Total amount</p>
          <p className='text-lg'>NGN 90,000</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className=''>Total sales</p>
          <p className='text-lg'>80</p>
        </div>
        <div className='flex justify-between items-center'>
          <Button page='withdraw'>Withdraw</Button>
          <ButtonOutline page='add-account'>Add account</ButtonOutline>
        </div>
      </div>
    </section>
  );
};

export default SalesCard;
