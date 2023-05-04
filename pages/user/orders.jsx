import React from 'react';
import OrdersList from '../../src/pagesSrc/User/OrdersList';
import Layout from '@src/components/Layout';

const orders = () => {
  return (
    <Layout page='order'>
      <OrdersList />
    </Layout>
  );
};

export default orders;
