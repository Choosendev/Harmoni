import Head from 'next/head';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';

const Layout = ({ children, styles, page }) => {
  console.log('layout', page);
  return (
    <div className=''>
      <Head>
        <title>Harmoni: Home of beats, NFTs and other contents</title>
        <meta name='description' content='Upload beat as NFTs and other contents get paid when other buys it or exchange or collaborate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Header page={page} />
      </header>
      <main className={styles}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
