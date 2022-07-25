import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { data } from './firebase';
import Link from 'next/link';
const Url = () => {
  let [res, setRes] = useState(null);

  const { query } = useRouter();
  const ref = query.ref;
  const dataRef = collection(data, 'url-shortner');
  const getData = async () => {
    await getDocs(dataRef).then((res) => {
      setRes(res);
      //   setUrls(
      //     res.docs.map((e) => {
      //       return e.data().url;
      //     }),
      //   );
      //   setRefs(
      //     res.docs.map((e) => {
      //       return e.data().ref;
      //     }),
      //   );
    });
  };
  getData();
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <button>
        <Link href="/">l</Link>
      </button>
    </div>
  );
};

export default Url;
