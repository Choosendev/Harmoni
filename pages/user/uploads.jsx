import React from 'react';
import MyUploads from '@src/pagesSrc/User/MyUploads';
import Layout from '@src/components/Layout';

const Uploads = () => {
  return (
    <Layout page='uploads'>
      <MyUploads />
    </Layout>
  );
};

export default Uploads;
