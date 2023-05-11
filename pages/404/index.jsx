import React from 'react';
import Layout from '@src/components/Layout';
import Image from 'next/image';
import MainContentWrapper from '@src/components/Wrapper/MainContentWrapper';

const index = () => {
  return (
    <Layout>
      <MainContentWrapper>
        <div className='pt-[88px] flex justify-center items-center'>
          <Image src='/assets/images/404.jpg' width={300} height={300} />
        </div>
      </MainContentWrapper>
    </Layout>
  );
};

export default index;
