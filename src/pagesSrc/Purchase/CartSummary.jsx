import React from 'react';
import Button from '../../components/Button';
import Checkout from '../../components/Popup/SuccessCheck';

const CartSummary = () => {
  return (
    <div className='p-4 bg-[#1b1b1b] mb-8 md:mb-6 xl:p-6'>
      <h2 className='heading-2 mb-9'>Cart summary</h2>
      <div className='flex flex-col gap-6 mb-4'>
        <div className='flex justify-between items-center'>
          <p>Total Gross</p>
          <p>USD 100</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Discount</p>
          <p>NGN 0.00</p>
        </div>
        <div className='flex justify-between items-center text-secondary mt-3'>
          <p>Net</p>
          <p>USD 100</p>
        </div>
      </div>
      <div>
        <p>You are checking out as @andybanny, not you? logout</p>
        <Button page='purchase/checkout' classname='mt-4 block'>
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
