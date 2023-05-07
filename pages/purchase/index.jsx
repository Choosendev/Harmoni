import React from 'react';
import PurchaseReview from '@src/pagesSrc/Purchase/PurchaseReview';
import Layout from '@src/components/Layout';

const Purchase = () => {
  return (
    <div>
      <Layout page='purchase'>
        <PurchaseReview />
      </Layout>
    </div>
  );
};

export default Purchase;
