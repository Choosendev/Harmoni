import Layout from '@src/components/Layout';
import HomeContent from '@src/pagesSrc/HomeContent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <ToastContainer>
        <Layout page='home' styles='flex flex-col items-center'>
          <HomeContent />
        </Layout>
      </ToastContainer>
    </>
  );
}
