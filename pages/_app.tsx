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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Provider store={store}> 
        <Component {...pageProps} />
      </Provider>
    </>)
}

export default MyApp
