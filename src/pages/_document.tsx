import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <body className=" bg-black dark:text-[#d6d9db] relative font-bold">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
