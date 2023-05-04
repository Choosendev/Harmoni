import React from 'react';
import Layout from '@src/components/Layout';
import SavedItemsList from '@src/pagesSrc/User/SavedItemsList';

const SavedItems = () => {
  return (
    <Layout page='saved-item'>
      <SavedItemsList />
    </Layout>
  );
};

export default SavedItems;
