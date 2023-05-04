import React from 'react';
import Layout from '@src/components/Layout';
import CartReview from '@src/pagesSrc/Cart';

const Cart = () => {
  return (
    <Layout page='cart'>
      <CartReview />
    </Layout>
  );
};

export default Cart;
