import Head from 'next/head';
import Image from 'next/image';
import Layout from '@src/components/Layout.js';
import HomeContent from '@src/pagesSrc/HomeContent';

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeContent />
      </Layout>
    </div>
  );
}
