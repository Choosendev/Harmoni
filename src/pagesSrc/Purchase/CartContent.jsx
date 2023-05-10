import React from 'react';
import CartReview from './CartReview';
import MainContentWrapper from '@src/components/Wrapper/MainContentWrapper';
import CartSummary from './CartSummary';

const CartContent = () => {
  return (
    <div className='pt-[88px] lg:pt-[168px] px-4 sm:px-10 md:px-24 xl:px-[100px] w-full'>
      <div className=''>
        <h1 className='heading-2 mb-8'>Cart review</h1>

        <div className='lg:flex lg:gap-4 xl:gap-7 justify-center'>
          {/* Cart Review */}
          <CartReview />

          {/* CART SUMMARY */}
          <CartSummary />

          {/* RECENTLY VIEWED */}
        </div>
      </div>
    </div>
  );
};

export default CartContent;
