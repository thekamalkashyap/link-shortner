import app, { data } from './firebase';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import googleimg from '../../public/google.png';
import { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
const Home = () => {
  let auth = getAuth();
  let [url, setUrl] = useState(null);
  let [ref, setRef] = useState(generateRef());
  const googleAuth = new GoogleAuthProvider();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleAuth).then((res) => {
      sessionStorage.setItem('token', res.user.accessToken);
      document.getElementById('form').classList.remove('hidden');
      document.getElementById('login').classList.add('hidden');
    });
  };
  const dataRef = collection(data, 'url-shortner');
  const addData = () => {
    addDoc(dataRef, {
      ref: ref,
      url: url,
    })
      .then(() => {
        document.getElementById('success').classList.remove('hidden');
        navigator.clipboard.writeText(`${window.location.host}/${ref}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function generateRef() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      document.getElementById('form').classList.remove('hidden');
      document.getElementById('login').classList.add('hidden');
    }
  });
  return (
    <>
      <div className=" h-screen w-screen flex flex-col justify-center items-center">
        <div className="hidden" id="form">
          <div className="flex flex-col">
            <label htmlFor="url">
              Url: <span className="text-red-500">*</span>
              <input
                type="url"
                name="url"
                id="urlInput"
                placeholder="https://google.com"
                onChange={() => {
                  setUrl(document.getElementById('urlInput').value);
                }}
                className="bg-transparent border  rounded-lg"
              />
            </label>
            <label htmlFor="ref">
              Short link:
              <input
                type="text"
                name="ref"
                id="refInput"
                placeholder="xyz"
                onChange={() => {
                  setRef(document.getElementById('refInput').value);
                }}
                className="bg-transparent border px-2  rounded-lg"
              />
            </label>
            <button
              type="submit"
              onClick={() => {
                addData();
              }}
              disabled={!url}
              className="bg-blue-500 disabled:opacity-60 py-1 px-2 rounded-md"
            >
              short
            </button>
            <div id="success" className="hidden">
              successfully sent data!
              <br />
              and link copied to clipboard
            </div>
          </div>
        </div>
        <div
          id="login"
          onClick={signUpWithGoogle}
          className="text-blue-500 tracking-tighter font-mono text-lg cursor-pointer "
        >
          Sign Up With
          <button className=" ml-2 relative h-9 w-20">
            <Image src={googleimg} alt="Google" layout="fill" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
