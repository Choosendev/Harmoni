import '../styles/globals.css';
import { store } from '@src/states/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contract from './contractABI/HarmonimainABI.json';
import contract from './contractABI/BeatsNFTABI.json';
import { useMoralis } from "react-moralis";

const contractAddress = "0xc8b19C1FE7c3C6a7F63588727d118049199aF10E";
const abi = contract.abi;
const { isWeb3Enabled } = useMoralis();

<MoralisProvider initializeOnMount={false}>
    <App />
</MoralisProvider>
function MyApp({ Component, pageProps }) {
  return isWeb3Enabled ? <div>Welcome To Harmoni</div> : <h1>Make Sure MetaMask is installed and Account is Connected.</h1>;
  return (
    // <ToastContainer>

    <Provider store={store}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999, touchAction: 'manipulation' }}
      />
      <Component {...pageProps} />
    </Provider>
    // </ToastContainer>
  );
}

export default MyApp;
