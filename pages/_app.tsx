import GlobalStyles from '../styles/global';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Head> 
        <title>Loggin Wiser</title>
        <meta name="description" content="Loggin Wiser" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>)
}

export default MyApp
