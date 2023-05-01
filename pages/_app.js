import '../styles/globals.css';
import { store } from '@src/states/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
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
