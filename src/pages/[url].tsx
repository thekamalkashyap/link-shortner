import React from 'react';
import { useRouter } from 'next/router';
import data from './data.json';
import Link from 'next/link';
const Url = () => {
  const { query } = useRouter();
  const url = query.url;
  const link = data.filter((e) => e.param == url);
  React.useEffect(() => {
    if (link.length != 0) {
      window.open(`https://${link[0].url}`, '_self');
    }
  });
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      {link.length == 0 ? (
        'You followed a broken url.'
      ) : (
        <Link href={`https://${link[0].url}`}>{link[0].url}</Link>
      )}
    </div>
  );
};

export default Url;
