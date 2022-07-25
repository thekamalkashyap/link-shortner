import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>url Shortner</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
        <meta
          name="description"
          content="Url shortner using nextjs tailwind typescript."
        />
        <meta
          name="keywords"
          content="url shortner, link shortner, Javascript, AOS, React, Nextjs , Portfolio, Creative developer"
        />
        <meta name="author" content="kamal kashyap" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
