import '../styles/globals.css';
import { store } from '@src/states/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConnectButton } from "@web3uikit/web3";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import { useWeb3Contract } from 'react-moralis';
import HarmonimainABI from './contractABI/HarmonimainABI.json'
import HarmonimainABIeContractAddress from './contractABI/contractAddresses.json'


// const { runContractFunction: get } = useWeb3Contract({
//   abi: HarmonimainABI.abi,
//   contractAddress: HarmonimainABIeContractAddress[31337],
//   functionName: "get",
//   params: {},
// });
//useEffect(() => {}, [isWeb3Enabled]);

// {/* <MoralisProvider initializeOnMount={false}>
//     <App />
// </MoralisProvider> */}
function MyApp({ Component, pageProps }) {
  //return (
  //   <Router>
  //     <Switch>
  //   <div>
  //       <ConnectButton />
  //       {isWeb3Enabled ? (
  //           supportedChains.includes(chainId) ? (
  //               <div>Welcome Harmoni</div>
  //           ) : (
  //               <p>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</p>
  //           )
  //       ) : (
  //           <h1>
  //               Make Sure Supported Wallet is installed and Account is Connected.
  //           </h1>
  //       )}
  //   </div>
  // );
  // // return (
  // //   <div>
  // //       <ConnectButton />
  // //       {isWeb3Enabled ? (
  // //           supportedChains.includes(chainId) ? (
  // //               <div>Welcome Harmoni</div>
  // //           ) : (
  // //               <p>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</p>
  // //           )
  // //       ) : (
  // //           <h1>
  // //               Make Sure Supported Wallet is installed and Account is Connected.
  // //           </h1>
  // //       )}
  // //   </div>
  // // );
  return (
    // <ToastContainer>
        <Router>
      <Switch>
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
    {/* //</Switch></ToastContainer> */}
      </Switch>
    </Router>
  );
}

export default MyApp;
