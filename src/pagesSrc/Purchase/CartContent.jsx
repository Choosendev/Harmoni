import React from 'react';
import CartReview from './CartReview';
import MainContentWrapper from '@src/components/Wrapper/MainContentWrapper';
import CartSummary from './CartSummary';

const CartContent = () => {
  return (
    <MainContentWrapper classname='pt-[88px] lg:pt-[168px]'>
      <h1 className='heading-2 mb-8'>Cart review</h1>

      <div className='xl:flex xl:gap-7'>
        {/* Cart Review */}
        <CartReview />

        {/* CART SUMMARY */}
        <CartSummary />
      </div>
    </MainContentWrapper>
  );
};

export default CartContent;
