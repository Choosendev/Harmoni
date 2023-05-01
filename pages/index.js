import Layout from '@src/components/Layout';
import HomeContent from '@src/pagesSrc/HomeContent';

export default function Home() {
  return (
    <>
      <Layout page='home' styles='flex flex-col items-center'>
        <HomeContent />
      </Layout>
    </>
  );
}
