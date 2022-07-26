import { useRouter } from 'next/router';
import Link from 'next/link';
import { database } from '../../firebase';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
const Param = () => {
  const router = useRouter();
  const param = router.query.param;
  const [url, setUrl] = useState('');
  useLayoutEffect(() => {
    console.warn(param);
    const docRef = collection(database, 'url');
    async function getData() {
      const q = query(docRef, where('param', '==', `${param}`), limit(1));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUrl(doc.data().url);
      });
    }
    try {
      getData();
    } finally {
      window.open(url, '_self');
    }
  });
  return (
    <div className=" h-[70vh] w-screen flex justify-center items-center">
      <button>
        <Link href={url ? url : '/'} target="_self">
          {url ? url : 'url not exists'}
        </Link>
      </button>
    </div>
  );
};

export default Param;
