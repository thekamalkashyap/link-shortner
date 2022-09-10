import { database } from '../../firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useEffect } from 'react';
import Router from 'next/router';
const Param = ({ url }) => {
  useEffect(() => {
    if (url) {
      window.open(url, '_self');
    } else {
      setTimeout(() => {
        Router.replace('/');
      }, 1500);
    }
  }, [url]);

  return (
    <div className=" h-screen flex justify-center items-center ">
      {!url && 'broken url'}
    </div>
  );
};

export default Param;

export async function getServerSideProps(context) {
  let url = undefined;
  const ref = doc(database, 'url', `${context.query.param}`);
  await getDoc(ref).then((docSnap) => {
    docSnap.exists() ? (url = docSnap.data().url) : (url = null);
  });

  return {
    props: {
      url,
    },
  };
}
