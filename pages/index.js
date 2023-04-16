import Layout from '@src/components/Layout.js';
import HomeContent from '@src/pagesSrc/HomeContent';

export default function Home() {
  return (
    <div>
      <Layout styles='flex flex-col items-center'>
        <HomeContent />
      </Layout>
    </div>
  );
}
