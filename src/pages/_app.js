import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>c-url</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
        <meta
          name="description"
          content="Url shortner using nextjs, tailwind, typescript and firebase"
        />
        <meta
          name="keywords"
          content="url shortner, firebase ,  link shortner, Javascript, AOS, React, Nextjs , Portfolio, Creative developer"
        />
        <meta name="author" content="kamal kashyap" />
      </Head>
      <AuthProvider>
        <div className=" max-w-4xl m-auto">
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </>
  );
}

export default MyApp;
