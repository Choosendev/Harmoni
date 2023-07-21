import '../styles/globals.css';
import { store } from '@src/states/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contract from './contractABI/HarmonimainABI.json';
import { useMoralis } from "react-moralis";
import { ConnectButton } from "@web3uikit/web3";

const contractAddress = "0xc8b19C1FE7c3C6a7F63588727d118049199aF10E";
const abi = contract.abi;
const { isWeb3Enabled, chainId: chainIdHex } = useMoralis();
const chainId = parseInt(chainIdHex).toString();
const supportedChains = ["31337"];
const { runContractFunction: get } = useWeb3Contract({
  abi: HarmonimainABI.abi,
  contractAddress: HarmonimainABIeContractAddress!,
  functionName: "get",
  params: {},
});
useEffect(() => {}, [isWeb3Enabled]);

<MoralisProvider initializeOnMount={false}>
    <App />
</MoralisProvider>
function MyApp({ Component, pageProps }) {
  return (
    <div>
        <ConnectButton />
        {isWeb3Enabled ? (
            supportedChains.includes(chainId) ? (
                <div>Welcome Harmoni</div>
            ) : (
                <p>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</p>
            )
        ) : (
            <h1>
                Make Sure Supported Wallet is installed and Account is Connected.
            </h1>
        )}
    </div>
  );
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
