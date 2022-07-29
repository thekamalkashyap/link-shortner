import { useRouter } from 'next/router';
import { database } from '../../firebase';
// import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { getDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const Param = () => {
  const router = useRouter();
  const { param } = router.query;
  const [url, setUrl] = useState('loading');

  // const docRef = collection(database, 'url');
  // const q = query(docRef, where('param', '==', `${param}`), limit(1));

  // async function getData() {
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // window.open(doc.data().url, '_self');
  //   });
  // }

  const docRef = doc(database, 'url', `${param}`);
  async function getData() {
    await getDoc(docRef).then((docSnap) => {
      docSnap.exists()
        ? window.open(docSnap.data().url, '_self')
        : setUrl('notexists');
    });
  }

  useEffect(() => {
    if (param) {
      getData();
    }
  }, [param]);

  useEffect(() => {
    if (url == 'notexists') {
      setTimeout(() => {
        router.replace('/');
      }, 1500);
    }
  }, [url]);

  return (
    <div className=" h-screen flex justify-center items-center ">
      {url == 'loading' && 'loading...'}
      {url == 'notexists' && 'broken url'}
    </div>
  );
};

export default Param;
