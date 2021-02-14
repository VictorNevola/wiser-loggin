import GlobalStyles from '../styles/global';
import Head from 'next/head';
import { Provider } from 'react-redux';

import store from '../store';

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Head> 
        <title>Loggin Wiser</title>
        <meta name="description" content="Loggin Wiser" />
      </Head>
      <GlobalStyles />
      <Provider store={store}> 
        <Component {...pageProps} />
      </Provider>
    </>)
}

export default MyApp
